import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router : Router,
    private loginService : LoginService
  ) { }

  ngOnInit(): void {
  }

  validPattern = "^[a-zA-Z0-9]{10}$"; 
  logInForm = new FormGroup({
    username : new FormControl('',[Validators.email , Validators.required ]),
    password : new FormControl('',[Validators.required,Validators.pattern(this.validPattern)])
  })


  goToDashboard(){
    this.router.navigate(['dashboard']);
  }

  onSubmit(){
    console.log(this.logInForm.value);
    this.goToDashboard();
    this.loginService.sendMessage(true);
  }

}
