import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  formSubmit: boolean = false;
  login: any = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(private formBuilder: FormBuilder,
              private router: Router){}

  ngOnInit(): void { }

  iniciarSesion(){
    if(this.login.invalid){
      return;
    }
    this.formSubmit = true;
  }

  campoNoValido(campo: string){
    if(this.login.get(campo).invalid && this.formSubmit){
      return true;
    }else{
      return false;
    }
  }

}
