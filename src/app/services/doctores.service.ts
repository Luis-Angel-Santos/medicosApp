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
  obtenerDoctor(){
    return this.http.get(`${this.url}ObtenerDoctores.php`);
  }
  
  //seleccionar doctor mediante su id
  seleccionarDoctor(idDoctor: number){
    return this.http.get(`${this.url}SeleccionarDoctor.php?iddoctor=${idDoctor}`);
  }

  //editar los datos de un doctor
  editarDoctor(doctor: Doctor){
    return this.http.post(`${this.url}EditarDoctor.php`, JSON.stringify(doctor));
  }

  //imprimir receta del paciente
  generarRecetaPDF(idHistorial: number){
    window.open(`${this.url}extensiones/tcpdf/pdf/rec.php?idhistorial=${idHistorial}`, '_blank');
  }

}
