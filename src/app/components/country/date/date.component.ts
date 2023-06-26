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
    this.hourUTC = Number(this.timezones.length > 1 ? this.timezones[this.timezones.length / 2].slice(3, 6) : this.timezones[0].slice(3, 6));
    this.minutesUTC = Number(this.timezones.length > 1 ? this.timezones[this.timezones.length / 2].slice(7, 9) : this.timezones[0].slice(7, 9));
    let momentoActual = new Date()
    let hora = momentoActual.getUTCHours() + this.hourUTC ;
    let minuto = momentoActual.getUTCMinutes() + this.minutesUTC;
    let dateString = momentoActual.toLocaleDateString();
    let getDate = momentoActual.getDate();
    let fecha = hora >= 24 ? dateString.replace(String(getDate), String(getDate + 1)) : (hora < 0 ?dateString.replace(String(getDate), String(getDate - 1)) : dateString);
    let horaExacta = hora >= 24 ? hora - 24 : (hora < 0 ? hora + 24 : hora);
    let minutoExacto: number;
    if (minuto > 60) {
      minutoExacto = minuto - 60;
      horaExacta++;
    } else {
      minutoExacto = minuto;
    }
    let segundo = momentoActual.getSeconds()
    this.date = fecha;
    this.time = `${horaExacta}:${minutoExacto}:${segundo}`
  }
}
