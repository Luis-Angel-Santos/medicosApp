import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, 
              private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.isLogin();
  }

  isLogin(): any{
    if(this.loginService.isLoggedIn()){
      return true;
    }else{
      Swal.fire({
        title: 'Acceso denegado',
        text: 'No tienen acceso a esta ruta. Por favor inicie sesión con sus credenciales',
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
      });
      this.router.navigate(['/login'])
    }
     
  }
  
}
