import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Historial } from '../interfaces/historial.interface';
import { Pacientes } from '../interfaces/pacientes.interface';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  url: string = 'http://localhost/api/';
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

  //eliminar un paciente mediante su id
  eliminarPaciente(idpaciente: number){
    return this.http.get(`${this.url}EliminarPaciente.php?idpaciente=${idpaciente}`);
  }

  //crear nuevo historial de un paciente
  crearHistorial(nuevoHistorial: Historial){
    return this.http.post(`${this.url}NuevoHistorial.php`, JSON.stringify(nuevoHistorial));
  }

  //obtener todos los historiales de los pacientes
  obtenerHistoriales(){
    return this.http.get(`${this.url}ObtenerHistoriales.php`);
  }

  //obtener el expediente del paciente mediante su id
  obtenerExpediente(idpaciente: number){
    return this.http.get(`${this.url}ObtenerExpedientes.php?idpaciente=${idpaciente}`);
  }

  //seleccionar expediente del paciente mediante el id del historial
  seleccionarExpediente(idhistorial: number){
    return this.http.get(`${this.url}SeleccionarExpediente.php?idhistorial=${idhistorial}`);
  }

  //editar expediente de un paciente
  editarExpediente(expediente: any){
    return this.http.post(`${this.url}EditarExpediente.php`, JSON.stringify(expediente));
  }

}
