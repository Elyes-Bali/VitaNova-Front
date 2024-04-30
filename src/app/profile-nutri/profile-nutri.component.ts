import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../_services/TimerService';
import { UserService } from '../_services/user.service';
import { StorageService } from '../_services/storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-nutri',
  templateUrl: './profile-nutri.component.html',
  styleUrls: ['./profile-nutri.component.css']
})
export class ProfileNutriComponent implements OnDestroy {
  private timerSubscription: Subscription | undefined;
  elapsedTime: number = 0;
  id: number = 0;
  isLoggedIn = false;
  userId: number = 0;
  timerRunning: boolean = false;
  startTime: number = 0;
  totalTimeConsumed: number = 0; // New property to accumulate total time consumed

  constructor(
    private route: ActivatedRoute,
    private timerService: TimerService,
    private userService: UserService,
    private storageService: StorageService,
  ) {
    this.timerSubscription = this.timerService.getElapsedTime().subscribe(time => {
      this.elapsedTime = time;
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.userId = user.id;
    }
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(remainingSeconds)}`;
  }

  private padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  startTimer(): void {
    if (!this.timerRunning) {
      this.startTime = Date.now();
      this.timerService.startTimer();
      this.timerRunning = true;
    }
  }

  stopTimer(): void {
    if (this.timerRunning) {
      const endTime = Date.now();
      const deltaTime = endTime - this.startTime;
      const elapsedTime = Math.floor(deltaTime / 1000);
      this.totalTimeConsumed += elapsedTime; // Add elapsed time to the total time consumed
      this.timerService.stopTimer();
      this.timerRunning = false;

      const userId = this.userId;
      const timeConsumed = this.totalTimeConsumed; // Send the total time consumed

      this.userService.updateTimeConsumed(userId, timeConsumed).subscribe(
        response => {
          console.log('Time consumed updated successfully:', response);
          // You can handle success actions here if needed
        },
        error => {
          console.error('Error updating time consumed:', error);
          // Handle error cases here if needed
        }
      );
    }
  }
}
