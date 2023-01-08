import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../services/pacientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial-paciente',
  templateUrl: './historial-paciente.component.html',
  styleUrls: ['./historial-paciente.component.css']
})
export class HistorialPacienteComponent implements OnInit{

  historiales: any[] = [];
  filtrarNombre: any = '';
  p: number = 1;

  constructor(public pacientesServices: PacientesService,
              private router: Router){ }

  ngOnInit(): void { 
    this.obtenerHistoriales();
  }

  obtenerHistoriales(){
    this.pacientesServices.obtenerHistoriales()
      .subscribe((historiales: any) => {
        this.historiales = historiales;
    });
  }

  verExpediente(idpaciente: number){
    this.router.navigate([`/dashboard/expediente`, idpaciente]);
  }

}
