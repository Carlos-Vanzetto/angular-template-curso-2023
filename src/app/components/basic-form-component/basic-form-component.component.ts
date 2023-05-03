import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'login-form',
  templateUrl: './basic-form-component.component.html',
  styleUrls: ['./basic-form-component.component.scss'],
})
export class BasicFormComponentComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.requiredTrue,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$'),
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
