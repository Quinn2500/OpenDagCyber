import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  totalTime: number = 10;
  timeLeft = this.totalTime;
  interval;


  constructor(private globals: Globals) { }

  ngOnInit() {
    this.startTimer()
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = this.totalTime;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}
