import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-button-auth',
  templateUrl: './button-auth.component.html'
})
export class ButtonAuthComponent implements OnInit {

  @Input()
    formInvalid! : boolean;

  @Input()
    title! : string;

  constructor() { }

  ngOnInit(): void {
  }

}
