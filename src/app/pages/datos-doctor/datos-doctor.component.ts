import { Component, OnInit } from '@angular/core';
import { DoctoresService } from '../../services/doctores.service';
import { Doctor } from '../../interfaces/doctor.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datos-doctor',
  templateUrl: './datos-doctor.component.html',
  styleUrls: ['./datos-doctor.component.css']
})
export class DatosDoctorComponent implements OnInit{

  doctores: Doctor[] = []; 
  doctor: any = {};

  constructor(public doctoresService: DoctoresService){}

  ngOnInit(): void {
    this.obtenerDoctores();
  }

  obtenerDoctores(){
    this.doctoresService.obtenerDoctor()
      .subscribe((doctores: any) => {
        this.doctores = doctores;
    });
  }

  seleccionarDoctor(idDoctor: any){
    this.doctoresService.seleccionarDoctor(idDoctor)
      .subscribe((doctor: any) => {
        this.doctor = doctor[0];
    });
  }

  editarDoctor(){
    Swal.fire({
      icon: 'question',
      title: '¿Editar Información?',
      text: '¿Desea editar la información de este doctor?',
      showCancelButton: true,
      confirmButtonText: 'Editar',
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.doctoresService.editarDoctor(this.doctor)
          .subscribe((resp :any) => {
            if(resp['resultado'] == 'OK'){
              Swal.fire({
                icon: 'success',
                title: 'Información Actualizada',
                text: 'La información del doctor fue actualizada correctamente',
                showConfirmButton: false,
                timer: 2000
              });
              this.obtenerDoctores();
            }else {
              Swal.fire('Opps', 'Parece que hubo un problema', 'error')
            }
        });
      }
    });
  }

}