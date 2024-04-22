import { Component ,Input} from '@angular/core';
import { PsychiatristService } from '../services/psychiatrist.service';

@Component({
  selector: 'app-time-calendar',
  templateUrl: './time-calendar.component.html',
  styleUrls: ['./time-calendar.component.css']
})
export class TimeCalendarComponent {

  availableTimeSlots!: string[];
  currentDate: Date = new Date();

  constructor(private consultationService: PsychiatristService) { }

  ngOnInit(): void {
    // Assuming you have the date and psychiatrist ID
    const date = '2024-04-18'; // Example date
    const psychologueId = 4; // Example psychiatrist ID

    this.consultationService.findAvailableTimeSlots(date, psychologueId).subscribe(
      timeSlots => {
        this.availableTimeSlots = timeSlots;
      },
      error => {
        console.error('Error fetching available time slots:', error);
      }
    );
  }
  getGridRow(index: number): string {
    const startTime = parseInt(this.availableTimeSlots[0].split(':')[0], 10); // Get the start hour from the first time slot
    const endTime = parseInt(this.availableTimeSlots[this.availableTimeSlots.length - 1].split(':')[0], 10) + 1; // Get the end hour from the last time slot
    const slotTime = parseInt(this.availableTimeSlots[index].split(':')[0], 10); // Get the hour of the current time slot
    const start = (slotTime - startTime) * 3 + 37; // Calculate the start grid row
    const end = start + 4; // Calculate the end grid row
    return `${start}/${end}`;
  }
  
}
