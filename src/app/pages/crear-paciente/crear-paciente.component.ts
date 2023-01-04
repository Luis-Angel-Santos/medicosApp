import { Component } from '@angular/core';
import { PacientesService } from '../../services/pacientes.service';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent {

  paciente: any = {};

  constructor(public pacientesService: PacientesService){}

  altaPaciente(){
    this.pacientesService.altaPaciente(this.paciente)
      .subscribe({
          next: resul => { console.log(resul); },
          error: err => { console.log(err); }
      });
  }

}
