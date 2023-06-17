import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from 'src/app/services/countries/countries.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() countries!: string[];
  @Input() modalTitle!: string;
  @Input() loading!: boolean;

  constructor(private _loginService: LoginService,
              private router: Router) {}

  ngOnInit(): void {}
  
  getPais(){
    if(!this._loginService.isLoggedIn){
      this.router.navigate(['/login']);
      return
     }
  }
}
