import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGem } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faHome, faPrint } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faFacebookF = faFacebookF
  faTwitter = faTwitter
  faGoogle = faGoogle
  faInstagram = faInstagram
  faLinkedin = faLinkedin
  faGithub = faGithub
  faEnvelope = faEnvelope
  faGem = faGem
  faPhone = faPhone
  faHome = faHome 
  faPrint = faPrint
  constructor() { }

  ngOnInit(): void {
  }

}
