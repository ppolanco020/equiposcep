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
  marcas:any[]=[];
  modelos:any[]=[];
  modelo:any={};

  equipo:any={
    equipoprocesador:[],
    marcamodelo:[]
  };


  // Valores seleccionados
  selectedCountry: any = [];
  selectedCity: any = [];

  // Lista de ciudades depende del país seleccionado
  cities: any=[]=[];
  countries: any[]=[];


  constructor(private http:HttpClient){


    this.buscarEquipo();
    this.buscarProcesador();
    this.buscarMarca();
    this.buscarModelo();
  }

  

  ingresar(){
    let formularioValido:any=document.getElementById("equipoForm");
  
    if(formularioValido.reportValidity()){
      this.servicioGuardar().subscribe(
        (u:any)=> this.finalizarGuardar(u)
      )      
       } 
    }
  
    servicioGuardar(){
    let httpOptions={
        headers:new HttpHeaders({
      'Content-Type':'application/json'
        })
          }
      return this.http.post(
        "http://localhost:8080/equipo/guardar",
      this.equipo, httpOptions);
     
    }
  
  
    finalizarGuardar(u:any){
      this.buscarEquipo();
      alert("Usuario guardado exitosamente!!")
  
    }


  buscarEquipo(){
    this.servicioBuscarEquipos().subscribe(
      (u:any) => this.equipos = u
    )
  }
  servicioBuscarEquipos():Observable<any>{
    return this.http.get<any>("http://localhost:8080/equipo/buscar");
  }
  



  buscarModelo(){
    this.servicioBuscarModelos().subscribe(
      (u:any) => this.modelos = u
    )
  }
  servicioBuscarModelos():Observable<any>{
    return this.http.get<any>("http://localhost:8080/modelo/buscar");
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

  agregarMarcaModelo(){
    this.equipo.marcamodelo.push({});
  }
   
  
 onCountryChange() {
alert("selected "+this.selectedCountry)
    if (this.selectedCountry > 0) {
      this.servicioBuscarModeloyMarca().subscribe(
        (u:any) => this.cities = u
      
      //  this.selectedCity = 0;  // Resetear ciudad seleccionada
      )
    } else {
      this.cities = [];

    }
  }

  
  
  servicioBuscarModeloyMarca():Observable<any> {
    return this.http.get<any>(`http://localhost:8080/modelo/buscar/marca/${this.selectedCountry}`);

  }

}
