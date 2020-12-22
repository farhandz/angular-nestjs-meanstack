import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.minLength(6)
      ]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }

  haimanis() {
    console.log("asjbajsbjasbjbasjb")
    alert('asassaas')
  }

  onSubmit() {
    if(this.loginForm.invalid) {
      return
    } 
      this.authService.login(this.loginForm.value).pipe(
        map(token => console.log(token))
      ).subscribe(data => console.log(data));

  }

  // login() {
  //    this.authService.login('ammarganteng@gmail.com', 'rahasia').subscribe(data => console.log(data))
  // }

}
