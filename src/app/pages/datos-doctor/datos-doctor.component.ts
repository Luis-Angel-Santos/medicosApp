import { Component, OnInit } from '@angular/core';
import { DoctoresService } from '../../services/doctores.service';
import { Doctor } from '../../interfaces/doctor.interface';

@Component({
  selector: 'app-datos-doctor',
  templateUrl: './datos-doctor.component.html',
  styleUrls: ['./datos-doctor.component.css']
})
export class DatosDoctorComponent implements OnInit{

  doctores: Doctor[] = []; 

  constructor(public doctoresService: DoctoresService){}

  ngOnInit(): void {
    this.obtenerDoctores();
  }

  obtenerDoctores(){
    this.doctoresService.obtenerDoctor()
      .subscribe((doctores) => {
        this.doctores = doctores;
    });
  }

}