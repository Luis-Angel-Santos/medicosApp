import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from '../services/pacientes.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit{

  logout(){
    this.router.navigate(['login']);
  }

  constructor(public pacientesService: PacientesService,
              private router: Router){
    pacientesService.menu;
  }

  ngOnInit(): void {
  
  }

}
