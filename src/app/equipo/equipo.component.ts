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
  marcas:any=[];

  equipo:any={
    equipoprocesador:[],
    marcamodelo:[]
  };



  constructor(private http:HttpClient){


    this.buscarEquipo();
    this.buscarProcesador();
    this.buscarMarca();
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


  



  buscarMarca(){
    this.servicioBuscarMarca().subscribe(
      (u:any) => this.marcas = u
    )
  }
  servicioBuscarMarca():Observable<any>{
    return this.http.get<any>("http://localhost:8080/marca/buscar");
  }

  
  agregarmarcaModelo(){
    this.equipo.marcamodelo.push({});
    
  }


  
}
