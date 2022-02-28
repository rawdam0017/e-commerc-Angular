import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.RegisterForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      Username: ['',
        [
          Validators.required,
          Validators.pattern("^[a-z]*$")]],
      Password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      Confirmpassword: ['', Validators.required]
    },
      { validators: this.MustMatch('Password', 'Confirmpassword') }
    )
  }

  get formControls() {
    return this.RegisterForm.controls;
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (FormGroup: FormGroup) => {
      const control = FormGroup.controls[controlName];
      const matchingControl = FormGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['MustMatch']) {
        return
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MustMatch: true })
      }
      else {
        matchingControl.setErrors(null)
      }

    }

  }

  ngOnInit(): void {
  }
 
  submit() {
    console.log(this.RegisterForm);
  }

}