import { Component } from '@angular/core';
import { PacientesService } from '../../services/pacientes.service';
import { Pacientes } from '../../interfaces/pacientes.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent {

  paciente: Pacientes = {
    idpaciente: '',
    nompaciente: '',
    edadpaciente: '',
    telpaciente: '',
    dirpaciente: ''
  };

  constructor(public pacientesService: PacientesService,
              public router: Router){}

  altaPaciente(){
    Swal.fire({
      title: '¿Registrar paciente?',
      showCancelButton: true,
      confirmButtonText: 'Registrar',
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.pacientesService.altaPaciente(this.paciente)
          .subscribe({
              next: resul => { this.router.navigate(['/dashboard/nuevo-historial']); },
              error: err => { console.log(err); }
          });
        Swal.fire('Registrado', 'Paciente registrado correctamente', 'success')
      } else if (result.isDenied) {
        Swal.fire('Opps', 'Parece que hubo un problema', 'error')
      }
    })
    
  }

}
