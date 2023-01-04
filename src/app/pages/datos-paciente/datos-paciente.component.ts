import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../services/pacientes.service';
import { Pacientes } from '../../interfaces/pacientes.interface';

@Component({
  selector: 'app-datos-paciente',
  templateUrl: './datos-paciente.component.html',
  styleUrls: ['./datos-paciente.component.css']
})
export class DatosPacienteComponent implements OnInit{

  pacientes: Pacientes[] = [];

  constructor(public pacientesService: PacientesService){}
  
  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes(){
    this.pacientesService.obtenerPacientes()
      .subscribe((pacientes) => {
        this.pacientes = pacientes;
      })
  }

}
