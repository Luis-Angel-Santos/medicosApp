import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pacientes } from '../interfaces/pacientes.interface';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  url: any = 'http://localhost/api/';
  public menu = [
    {
      titulo: 'Doctores',
      icono: 'fa-solid fa-user-doctor',
      submenu: [
        {titulo: 'Datos del Doctor', url: '/dashboard/datos-doctor'}
      ]
    },
    {
      titulo: 'Pacientes',
      icono: 'fa fa-user-o',
      submenu: [
        {titulo: 'Registrar Paciente', url: '/dashboard/crear-paciente'},
        {titulo: 'Datos de Pacientes', url: '/dashboard/datos-paciente'}
      ]
    },
    {
      titulo: 'Historial Clinico',
      icono: 'fa-solid fa-file-lines',
      submenu: [
        {titulo: 'Nuevo Historial', url: '/dashboard/nuevo-historial'},
        {titulo: 'Historial', url: '/dashboard/historial-paciente'}
      ]
    }
  ]

  constructor(private http: HttpClient) { }

  //registrar un paciente nuevo
  altaPaciente(paciente: Pacientes){
    return this.http.post(`${this.url}AltaPaciente.php`, JSON.stringify(paciente));
  }

  //obtener todos los pacientes registrados
  obtenerPacientes():Observable<Pacientes[]>{
    return this.http.get<Pacientes[]>(`${this.url}ObtenerPacientes.php`);
  }

  //obtener solo un paciente mediante su id
  obtenerUnPaciente(idpaciente: number){
    return this.http.get(`${this.url}SeleccionarPaciente.php?idpaciente=${idpaciente}`);
  }

  //editar datos de un paciente
  editarPaciente(paciente: Pacientes){
    return this.http.post(`${this.url}EditarPaciente.php`, JSON.stringify(paciente));
  }

}
