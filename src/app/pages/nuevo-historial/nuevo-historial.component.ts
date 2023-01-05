import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../services/pacientes.service';
import { Pacientes } from '../../interfaces/pacientes.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nuevo-historial',
  templateUrl: './nuevo-historial.component.html',
  styleUrls: ['./nuevo-historial.component.css']
})
export class NuevoHistorialComponent implements OnInit{

  pacientes: Pacientes[] = [];
  bloque: any = 1;
  multiBloque = new FormGroup({
    datosPaciente: new FormGroup({
      nombre: new FormControl(''),
      peso: new FormControl(''),
      talla: new FormControl(''),
      frc: new FormControl(''),
      temperatura: new FormControl('')
    }),
    datosPaciente2: new FormGroup({
      ah: new FormControl(''),
      apnp: new FormControl(''),
      hemotipo: new FormControl(''),
      alergias: new FormControl('')
    }),
    datosPaciente3: new FormGroup({
      app: new FormControl(''),
      cita: new FormControl(''),
      diagnostico: new FormControl(''),
    })
  });

  constructor(public pacientesService: PacientesService){}
  
  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes(){
    this.pacientesService.obtenerPacientes()
      .subscribe((pacientes) => {
        this.pacientes = pacientes;
    });
  }

  submit(){
    this.bloque++;
  }

  atras(){
    this.bloque--;
  }

}
