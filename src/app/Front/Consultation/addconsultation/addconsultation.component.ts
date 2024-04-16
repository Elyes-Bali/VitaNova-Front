import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/_services/storage.service';
import { Consultation, User } from 'src/app/models/user';
import { PsychiatristService } from 'src/app/services/psychiatrist.service';

@Component({
  selector: 'app-addconsultation',
  templateUrl: './addconsultation.component.html',
  styleUrls: ['./addconsultation.component.css']
})
export class AddconsultationComponent {
  consultationForm!: FormGroup;
  clientId: number | undefined;
  psychiatrists: User[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private consultationService: PsychiatristService,
    private storageService: StorageService,
    private router:Router,
    private route: ActivatedRoute

  ) {}

  ngOnInit(): void {
    this.initializeConsultationForm();
    this.setClientIdFromSession();
    this.loadPsychiatrists();
    this.route.params.subscribe(params => {
      const psychiatristId = params['psychiatristId'];
      if (psychiatristId) {
        this.consultationForm.patchValue({ psychiatristId: psychiatristId });
      }
    });
  }

  initializeConsultationForm(): void {
    this.consultationForm = this.formBuilder.group({
      startTime: ['', Validators.required],
      consultationDate: ['', Validators.required],
      psychiatristId: ['', Validators.required],
      clientId: ['', Validators.required]
    });
  }
  setClientIdFromSession(): void {
    const user = this.storageService.getUser(); // Get user information from session
    this.clientId = user?.id;
    if (this.clientId) {
      this.consultationForm.patchValue({ clientId: this.clientId });
    }
  }
    loadPsychiatrists(): void {
    this.consultationService.getPsychiatrists().subscribe(
      (psychiatrists: User[]) => {
        this.psychiatrists = psychiatrists;
      },
      (error) => {
        console.error('Failed to fetch psychiatrists', error);
      }
    );
  }
  onSubmit(): void {
    if (this.consultationForm.invalid) {
      return;
    }

    const consultation: Consultation = {

      startTime: this.consultationForm.value.startTime,
      consultationdate: this.consultationForm.value.consultationDate,
      psychiatrist: { id: this.consultationForm.value.psychiatristId },
      client: { id: this.consultationForm.value.clientId }
    };

    this.consultationService.addConsultation(consultation).subscribe(
      (response) => {
        // Handle successful response
        console.log('Consultation added successfully', response);
      },
      (error) => {
        // Handle error
        console.error('Failed to add consultation', error);
      }
    );
  }



}
