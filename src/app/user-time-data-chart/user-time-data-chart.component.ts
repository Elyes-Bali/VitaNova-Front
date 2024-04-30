import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { UserTimeData } from '../_services/user-time-data';

@Component({
  selector: 'app-user-time-data-chart',
  templateUrl: './user-time-data-chart.component.html',
  styleUrls: ['./user-time-data-chart.component.css']
})
export class UserTimeDataChartComponent implements OnInit {
  userTimeData: UserTimeData[] = []; // Define an array of UserTimeData

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserTimeData().subscribe((data: UserTimeData[]) => {
      this.userTimeData = data; // Assign the fetched data to the class property
      this.renderChart();
    });
  }

  renderChart(): void {
    // Use this.userTimeData to populate your chart
  }
  
}
