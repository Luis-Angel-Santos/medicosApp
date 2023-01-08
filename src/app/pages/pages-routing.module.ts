import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
import { DatosDoctorComponent } from './datos-doctor/datos-doctor.component';
import { DatosPacienteComponent } from './datos-paciente/datos-paciente.component';
import { ExpedienteComponent } from './expediente/expediente.component';
import { HistorialPacienteComponent } from './historial-paciente/historial-paciente.component';
import { PagesComponent } from './pages.component';
import { NuevoHistorialComponent } from './nuevo-historial/nuevo-historial.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
    { 
        path: 'dashboard', 
        canActivate: [AuthGuard],
        component: PagesComponent,
        children: [
            { path: 'crear-paciente', component: CrearPacienteComponent },
            { path: 'datos-doctor', component: DatosDoctorComponent },
            { path: 'datos-paciente', component: DatosPacienteComponent },
            { path: 'expediente/:id', component: ExpedienteComponent },
            { path: 'historial-paciente', component: HistorialPacienteComponent },
            { path: 'nuevo-historial', component: NuevoHistorialComponent },
        ]
    } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
