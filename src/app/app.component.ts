import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  endTime = new Date('August 19, 2018 18:00:00 PDT').getTime();
  days;
  hours;
  minutes;
  seconds;
  constructor() {
    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.endTime - now;
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance <= 0) {
        clearInterval(x);
      }
    }, 1000);
  }
}
