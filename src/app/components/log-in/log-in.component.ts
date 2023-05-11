import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'login-form',
  templateUrl: './log-in.component.html',
  styleUrls: ['../registration-form/registration-form.component.scss'],
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup;
  faEnvelope = faEnvelope;
  faLock = faLock;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
        ],
      ],
      checkOut: false,
    });
    this.loginForm.valueChanges.subscribe(console.log);
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get checkOut() {
    return this.loginForm.get('checkOut');
  }
}
