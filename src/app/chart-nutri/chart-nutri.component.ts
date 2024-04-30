import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../models/user';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart-nutri',
  templateUrl: './chart-nutri.component.html',
  styleUrls: ['./chart-nutri.component.css']
})
export class ChartNutriComponent implements OnInit, AfterViewInit {
  status = false;
  users: User[] = [];
  
  constructor(private userService: UserService) { }
  
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;
  chart: Chart | undefined;

  ngOnInit(): void {
    this.getAllUsers();
  }

  ngAfterViewInit() {
    if (this.chartCanvas.nativeElement) {
      this.renderChart();
    } else {
      console.error('Canvas element not found');
    }
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
        this.renderChart();
      },
      (error: any) => {
        console.error('Failed to retrieve users:', error);
      }
    );
  }

  renderChart(): void {
    if (!this.chartCanvas || !this.chartCanvas.nativeElement) {
      console.error('Canvas element not found');
      return;
    }
// Prepare data for the chart with pairs of username and timeConsumed
const dataPairs = this.users.map(user => ({ username: user.username, timeConsumed: user.timeConsumed }));

// Filter out pairs where timeConsumed is undefined and assert type
const validDataPairs = dataPairs.filter(pair => typeof pair.timeConsumed === 'number') as { username: string, timeConsumed: number }[];

// Prepare labels and validTimeConsumed from validDataPairs
const labels = validDataPairs.map(pair => pair.username);
const validTimeConsumed = validDataPairs.map(pair => pair.timeConsumed);

  

  
    // Check if there's an existing chart instance
    if (this.chart) {
      // Destroy the existing chart instance
      this.chart.destroy();
    }
  
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) {
      console.error('Canvas context not found');
      return;
    }
  
    // Prepare dataset with filtered timeConsumed
    const dataset = {
      label: 'Time Consumed by NUTRITNISTE',
      data: validTimeConsumed,
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    };
  
    // Create chart
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [dataset]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Time Consumed (seconds)'
            }
          },
          x: {
            title: {
              display: true,
              text: 'User'
            }
          }
        }
      }
    });
  }
  

  
}