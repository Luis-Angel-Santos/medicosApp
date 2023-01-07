import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { PacientesService } from '../../services/pacientes.service';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.css']
})
export class ExpedienteComponent implements OnInit{
  
  expedientes: any = {};
  datosExpediente: any[] = [];
  public expediente: any = {};
  mostrar: boolean = false;

  constructor(public pacientesService: PacientesService,
              private activateRoute: ActivatedRoute){
    this.activateRoute.params.subscribe( params => {
      this.expedientes = params['id'];
    });
  }
  
  ngOnInit(): void {
    this.obtenerExpedientes();
  }

  obtenerExpedientes(){
    this.pacientesService.obtenerExpediente(this.expedientes)
      .subscribe((datosExpedientes: any) => {
        this.datosExpediente = datosExpedientes;
    });
  }

  seleccionarExpediente(idHistorial: number){
    this.pacientesService.seleccionarExpediente(idHistorial)
      .subscribe((expediente: any) => {
        this.expediente = expediente[0];
    });
  }

  editarExpediente(){
    Swal.fire({
      icon: 'question',
      title: '¿Editar Expediente?',
      text: '¿Desea editar el expediente de este paciente?',
      showCancelButton: true,
      confirmButtonText: 'Editar',
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.pacientesService.editarExpediente(this.expediente)
          .subscribe((resp: any) => {
            if(resp['resultado'] == 'OK'){
              Swal.fire({
                icon: 'success',
                title: 'Expediente Editado',
                text: 'El expediente fue editado correctamente',
                showConfirmButton: false,
                timer: 2000
              });
              this.obtenerExpedientes();
            }else {
              Swal.fire('Opps', 'Parece que hubo un problema', 'error')
            }
        });
      }
    });
  }

}
