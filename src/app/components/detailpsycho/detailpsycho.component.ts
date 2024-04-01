import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Psychologue } from '../../Models/Psychologue';
import { PsychologueService } from '../../services/psychologue.service';


@Component({
  selector: 'app-detailpsycho',
  templateUrl: './detailpsycho.component.html',
  styleUrls: ['./detailpsycho.component.css']
})
export class DetailpsychoComponent implements OnInit, AfterViewInit {
  status: boolean = true;
 
  id: number = 0;
  psychologue: Psychologue = new Psychologue();
  consultationCount: number = 0;
  consultationCountPerMonth: number = 0;
  selectedYear: number = new Date().getFullYear();
  selectedMonth: string = 'January';
  availableYears: number[] = Array.from({ length: 11 }, (_, i) => 2020 + i);
  availableMonths: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  @ViewChild('chart') private chartRef?: ElementRef;
  public chart: any;

  constructor(private route: ActivatedRoute, private psychologueService: PsychologueService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.psychologueService.getPsychologueById(this.id).subscribe(data => {
      this.psychologue = data;
      this.getConsultationCount();
    });
  }

  ngAfterViewInit(): void {
    //this.createChart();  // Initialize the chart when the view has been initialized
  }

  getConsultationCount(): void {
    this.psychologueService.getNumberConsultation(this.psychologue.psychologueId!)
      .subscribe(count => {
        console.log('Consultation Count:', count);
        this.consultationCount = count;
        // Update the chart after fetching data
       // this.updateChart();
      });
  }

  getConsultationCountPerMonth(): void {
    this.psychologueService.getNumberConsultationPerMonth(
      this.psychologue.psychologueId!,
      this.selectedYear,
      this.selectedMonth
    ).subscribe(count => {
      this.consultationCountPerMonth = count;
      // Update the chart after fetching data
      //this.updateChart();
    });
  }
/*
  createChart(): void {
    if (this.chartRef && this.chartRef.nativeElement) {
      const canvas: any = this.chartRef.nativeElement;
      const ctx = canvas.getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Total Consultations', `Consultations in ${this.selectedMonth} ${this.selectedYear}`],
          datasets: [
            {
              label: 'Consultation Count',
              data: [this.consultationCount, this.consultationCountPerMonth],
              backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
              borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
              borderWidth: 1,
            },
          ],
        },
      });
    }
  }

  updateChart(): void {
    if (this.chart) {
      this.chart.data.datasets[0].data = [this.consultationCount, this.consultationCountPerMonth];
      this.chart.update();
    } else {
      // If chart doesn't exist, create it
      this.createChart();
    }
  }*/
}
