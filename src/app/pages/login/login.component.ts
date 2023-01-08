import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

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
              private router: Router,
              private loginService: LoginService){}

  ngOnInit(): void { }

  iniciarSesion(){
    this.formSubmit = true;
    if(this.login.invalid){
      return;
    }
    
    this.loginService.iniciarSesion(this.login.value)
      .subscribe((resp) => {
        if(this.login.value){
          localStorage.setItem('email', this.login.get('email').value);
          this.router.navigate(['/dashboard/datos-paciente']);
        }else{
          localStorage.removeItem('email');

        }
    });
  }

  campoNoValido(campo: string){
    if(this.login.get(campo).invalid && this.formSubmit){
      return true;
    }else{
      return false;
    }
  }

}
