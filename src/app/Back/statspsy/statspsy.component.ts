import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PsychiatristService } from 'src/app/services/psychiatrist.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-statspsy',
  templateUrl: './statspsy.component.html',
  styleUrls: ['./statspsy.component.css']
})
export class StatspsyComponent {
  @ViewChild('consultationChart') consultationChartRef!: ElementRef;
  consultationsPerClient: Map<string, number> = new Map();
  psychologueId!: number;
  selectedYear!: number;
  selectedMonth!: string;
  private destroy$: Subject<void> = new Subject<void>();
  constructor(
    private route: ActivatedRoute,
    private consultationService: PsychiatristService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // Extract route parameters
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      this.psychologueId = +params['id']; // Convert to number if needed
      this.getConsultations();
    });
  }

  getConsultations(): void {
    this.consultationService
      .getConsultationCountPerClient(this.psychologueId)
      .subscribe(response => {
        this.consultationsPerClient = new Map(Object.entries(response));
        this.renderBarChart();
      });
      
  }
  renderBarChart(): void {
    const ctx = this.consultationChartRef.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Array.from(this.consultationsPerClient.keys()),
        datasets: [
          {
            label: 'Number of Consultations',
            data: Array.from(this.consultationsPerClient.values()),
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 10
          }
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
