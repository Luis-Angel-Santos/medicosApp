import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../interfaces/doctor.interface';

@Injectable({
  providedIn: 'root'
})
export class DoctoresService {

  url: string = 'http://localhost/api/';

  constructor(private http: HttpClient) { }

  //obtener datos de los doctores
  obtenerDoctor():Observable<Doctor[]>{
    return this.http.get<Doctor[]>(`${this.url}ObtenerDoctores.php`);
  }
  
}
