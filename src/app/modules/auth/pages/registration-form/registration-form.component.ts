import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidationErrors } from '@angular/forms';
import { faUser, faEnvelope, faLock, faKey } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { confirmedValidator } from 'src/app/shared/confirmed-validator.directive';
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

  // use this observable to notify errors
  errors$: Observable<ValidationErrors | null> = new Observable((subscriber) => {
    subscriber.next(this.registrationForm.errors);
    this.registrationForm.valueChanges.subscribe(() => {
      subscriber.next(this.registrationForm.errors);
    });
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group(
      {
        userName: new FormControl('', { validators: [Validators.required], updateOn: 'blur' }),
        email: new FormControl('', {
          validators: [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
          updateOn: 'blur',
        }),
        password: new FormControl('', {
          validators: [
            Validators.required,
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
          ],
          updateOn: 'blur',
        }),
        passwordRepeat: new FormControl('', {
          validators: [
            Validators.required,
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
          ],
          updateOn: 'blur',
        }),
        termsAgreement: new FormControl(false, { validators: Validators.required, updateOn: 'change' }),
      },
      { validators: confirmedValidator, updateOn: 'blur' }
    );

    // logging errors in console
    this.errors$.subscribe(console.log);
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
