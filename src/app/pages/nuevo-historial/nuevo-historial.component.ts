import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PacientesService } from '../../services/pacientes.service';
import { Pacientes } from '../../interfaces/pacientes.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Historial } from 'src/app/interfaces/historial.interface';

@Component({
  selector: 'app-nuevo-historial',
  templateUrl: './nuevo-historial.component.html',
  styleUrls: ['./nuevo-historial.component.css']
})
export class NuevoHistorialComponent implements OnInit{

  pacientes: Pacientes[] = [];
  bloque: any = 1;
  fecha = new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();
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
      alergias: new FormControl(''),
      app: new FormControl(''),
    }),
    datosPaciente3: new FormGroup({
      cita: new FormControl(''),
      diagnostico: new FormControl(''),
    })
  });
  nuevoHistorial: any = {
    fechahistorial: this.fecha
  }

  constructor(public pacientesService: PacientesService,
              private router: Router,
              private cdr: ChangeDetectorRef){}
  
  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes(){
    this.pacientesService.obtenerPacientes()
      .subscribe((pacientes) => {
        this.pacientes = pacientes;
    });
  }
  
  registrarHistorial(){
    Swal.fire({
      icon: 'question',
      title: '¿Desea guardar este historial?',
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonColor: 'red',
      confirmButtonColor: 'green',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.pacientesService.crearHistorial(this.nuevoHistorial)
          .subscribe((resp: any) => {
            if(resp['resultado'] == 'OK'){
              Swal.fire({
                icon: 'success',
                title: 'Historial Guardado',
                text: 'Historial guardado correctamente',
                showConfirmButton: false,
                timer: 2000
              });
              this.router.navigate(['/dashboard/historial-paciente']);    
            }else {
              Swal.fire('Opps', 'Parece que hubo un problema', 'error')
            }
        });
      }
    });
  }

  submit(){
    this.bloque++;
  }
  
  atras(){
    this.bloque--;
  }

  ngAfterContentChecked(): void{
    this.cdr.detectChanges();
  }


}
