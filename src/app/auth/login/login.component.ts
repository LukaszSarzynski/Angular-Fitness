import { AuthService } from './../auth.service';
import { AuthData } from './../auth-data.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  oLoginForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.oLoginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  onSubmit() {

    console.log(this.oLoginForm);

    this.authService.login({
      email: this.oLoginForm.value.login,
      password: this.oLoginForm.value.password
    })
  }

}
