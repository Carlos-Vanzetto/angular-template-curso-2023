import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
  FormControl,
} from '@angular/forms';
import { faUser, faEnvelope, faLock, faKey } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  registrationForm!: FormGroup;
  faUser = faUser;
  faEnvelope = faEnvelope;
  faLock = faLock;
  faKey = faKey;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group(
      {
        userName: new FormControl('', Validators.compose([Validators.required])),
        email: new FormControl(
          '',
          Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
        ),
        password: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
          ])
        ),
        passwordRepeat: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
          ])
        ),
        termsAgreement: false,
      },
      { validators: this.ConfirmedValidator('password', 'passwordRepeat') }
    );

    this.registrationForm.valueChanges.subscribe(console.log);
  }
  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors?.['ConfirmedValidator']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  get userName() {
    return this.registrationForm.get('userName');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  get passwordRepeat() {
    return this.registrationForm.get('passwordRepeat');
  }
  get termsAgreement() {
    return this.registrationForm.get('checkOut');
  }
}
