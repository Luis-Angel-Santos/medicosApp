import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../services/pacientes.service';
import { Pacientes } from '../../interfaces/pacientes.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datos-paciente',
  templateUrl: './datos-paciente.component.html',
  styleUrls: ['./datos-paciente.component.css']
})
export class DatosPacienteComponent implements OnInit{

  pacientes: Pacientes[] = [];
  paciente: any = {};

  constructor(public pacientesService: PacientesService){}
  
  ngOnInit(): void {
    this.obtenerPacientes()
  }

  obtenerPacientes(){
    this.pacientesService.obtenerPacientes()
      .subscribe((pacientes) => {
        this.pacientes = pacientes;
    });
  }

  seleccionarPaciente(idpaciente: any){
    this.pacientesService.obtenerUnPaciente(idpaciente)
      .subscribe((datosPaciente: any) => {
        this.paciente = datosPaciente[0];
    });
  }

  editarPaciente(){
    Swal.fire({
      icon: 'question',
      title: '¿Editar información del paciente?',
      showCancelButton: true,
      confirmButtonText: 'Editar',
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.pacientesService.editarPaciente(this.paciente)
          .subscribe((resp: any) => {
            if(resp['resultado'] == 'OK'){
              Swal.fire({
                icon: 'success',
                title: 'Datos Actualizados',
                text: 'Los datos del paciente fueron actualizados correctamente',
                showConfirmButton: false,
                timer: 2000
              });
            this.obtenerPacientes();
            }else {
              Swal.fire('Opps', 'Parece que hubo un problema', 'error')
            }
        });
      }
    });
  }

  eliminarPaciente(idpaciente: any){

    Swal.fire({
      icon: 'question',
      title: '¿Esta Seguro?',
      text: 'Esta acción no se puede revertir',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      confirmButtonColor: 'red',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.pacientesService.eliminarPaciente(idpaciente)
          .subscribe((resp: any) => {
            if(resp['resultado'] == 'OK'){
              Swal.fire({
                icon: 'success',
                title: 'Paciente Eliminado',
                text: 'El paciente fue eliminado correctamente',
                showConfirmButton: false,
                timer: 2000
              });
            this.obtenerPacientes();
            }else {
              Swal.fire('Opps', 'Parece que hubo un problema', 'error')
            }
        });
      }
    });
  }

}
