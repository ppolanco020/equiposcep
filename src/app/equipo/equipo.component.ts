import { Component } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';

import { FormsModule } from '@angular/forms'; // sirve para usar el ng model , sirve para poder linkear el controlador con la vista
import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';// consumir servicio rest
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

import { PrimeNG } from 'primeng/config';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-equipo',
  imports: [FormsModule,HttpClientModule,CommonModule,LogoutComponent,MenuModule],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css'
})
export class EquipoComponent {
  equipos:any=[];
  procesadores:any=[];

  equipo:any={
    equipoprocesador:[],
  };

  constructor(private http:HttpClient){



    this.buscarProcesador();
    this.buscarEquipo();
  }

  

  buscarEquipo(){
    this.servicioBuscarEquipos().subscribe(
      (u:any) => this.equipos = u
    )
  }
  servicioBuscarEquipos():Observable<any>{
    return this.http.get<any>("http://localhost:8080/equipo/buscar");
  }
  





  buscarProcesador(){
    this.servicioBuscarProcesador().subscribe(
      (u:any) => this.procesadores = u
    )
  }
  servicioBuscarProcesador():Observable<any>{
    return this.http.get<any>("http://localhost:8080/procesador/buscar");
  }

  
  agregarequipoProcesador(){
    this.equipo.equipoprocesador.push({});
    
  }

}
