import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  @Input() timezones!: string[];
  hourUTC!: number;
  minutesUTC!: number;
  date!: string;
  time!: string;

  constructor() {
   
  }

  ngOnInit(): void {
    this.mueveReloj();
  }


  mueveReloj(): void {
    
    this.reloj()

    setInterval(() => {
      this.reloj()
    }, 1000);;
  }

  reloj() {
    let a : number = Number((this.timezones.length / 2).toFixed(0))
    
    this.hourUTC = Number(this.timezones.length > 1 ? this.timezones[a].slice(3, 6) : this.timezones[0].slice(3, 6));
    this.minutesUTC = Number(this.timezones.length > 1 ? this.timezones[a].slice(7, 9) : this.timezones[0].slice(7, 9));
    let currentMoment = new Date()
    let time = currentMoment.getUTCHours() + this.hourUTC ;
    let minute = currentMoment.getUTCMinutes() + this.minutesUTC;
    let dateString = currentMoment.toLocaleDateString();
    let getDate = currentMoment.getDate();
    let date = time >= 24 ? dateString.replace(String(getDate), String(getDate + 1)) : (time < 0 ?dateString.replace(String(getDate), String(getDate - 1)) : dateString);
    let exactTime = time >= 24 ? time - 24 : (time < 0 ? time + 24 : time);
    let exactMinute: number;
    if (minute > 60) {
      exactMinute = minute - 60;
      exactTime++;
    } else {
      exactMinute = minute;
    }
    let second = currentMoment.getSeconds()
    this.date = date;
    this.time = `${exactTime}:${exactMinute}:${second}`
  }
}
