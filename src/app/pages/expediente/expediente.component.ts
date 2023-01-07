import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacientesService } from '../../services/pacientes.service';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.css']
})
export class ExpedienteComponent implements OnInit{
  
  expediente: any = {};
  datosExpediente: any[] = [];

  constructor(public pacientesService: PacientesService,
              private activateRoute: ActivatedRoute){
    this.activateRoute.params.subscribe( params => {
      this.expediente = params['id'];
    });
  }
  
  ngOnInit(): void {
    this.obtenerExpedientes();
  }

  obtenerExpedientes(){
    this.pacientesService.obtenerExpediente(this.expediente)
      .subscribe((expedientes: any) => {
        this.datosExpediente = expedientes;
    });
  }

}
