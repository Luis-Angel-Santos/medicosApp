import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

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

  constructor() { }
}
