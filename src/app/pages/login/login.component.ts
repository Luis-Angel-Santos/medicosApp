import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

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
        if(resp[0].email){
          Swal.fire({
            title: 'Entrando...',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
          }).then((resul)=> {
            localStorage.setItem('email', this.login.get('email').value);
            this.router.navigate(['/dashboard/datos-paciente']);
          });
        }else{
          Swal.fire({
            title: 'Opps',
            text: `Parece que ocurrio un problema: ${resp[0]}`,
            icon: 'error',
            showConfirmButton: false,
            timer: 3000,
          });
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
