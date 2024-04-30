import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private startTime: number | null = null;
  private timer$: Observable<number> | null = null;
  private elapsedTimeSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  startTimer(): void {
    if (!this.timer$) {
      this.startTime = Date.now();
      this.timer$ = timer(0, 1000).pipe(
        map(() => Math.floor((Date.now() - (this.startTime as number)) / 1000))
      );
      this.timer$.subscribe(time => {
        this.elapsedTimeSubject.next(time);
      });
    }
  }

  stopTimer(): void {
    if (this.timer$) {
      this.timer$.subscribe().unsubscribe();
      this.timer$ = null;
      this.startTime = null;
    }
  }

  getElapsedTime(): Observable<number> {
    return this.elapsedTimeSubject.asObservable();
  }
  
}
