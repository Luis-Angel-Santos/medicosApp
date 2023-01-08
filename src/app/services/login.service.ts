import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = 'http://localhost/api/';

  @Output() nombre: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }

  iniciarSesion(formData: any){
    return this.http.post(`${this.url}login.php`, formData)
      .pipe(map((Users: any) => {
        this.setToken(Users[0].name);
        this.nombre.emit(true);
        return Users;
      }
    ));
  }

  setToken(token: string){
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLoggedIn(){
    const user = this.getToken();
    if(user != null){
      return true;
    }
    return false;
  }

}
