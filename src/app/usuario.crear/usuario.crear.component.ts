import { Component } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';

import { FormsModule } from '@angular/forms'; // sirve para usar el ng model , sirve para poder linkear el controlador con la vista
import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';// consumir servicio rest
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

import { PrimeNG } from 'primeng/config';
import { MenuModule } from 'primeng/menu';


@Component({
  selector: 'app-usuario.crear',
  imports: [FormsModule,HttpClientModule,CommonModule,LogoutComponent,MenuModule],
  templateUrl: './usuario.crear.component.html',
  styleUrl: './usuario.crear.component.css'
})
export class UsuarioCrearComponent {


    usuarios:any=[];
    ubicaciones:any=[];

    marcas:any=[];
  

    usuario:any={
      usuarioubicacion:[],
  
    };
  
  
  
  
  
  
    constructor(private http:HttpClient){
  
  
      this.buscarUsuario();
      this.buscarUbicacion();
     // this.buscarMarca();
    }
  
    
  buscarUbicacion(){
    this.servicioBuscarUbicacion().subscribe(
      (u:any) => this.ubicaciones = u
    )
  }
  servicioBuscarUbicacion():Observable<any>{
    return this.http.get<any>("http://localhost:8080/ubicacion/buscar");
  }

  


buscarUsuario(){
  this.servicioBuscarUsuario().subscribe(
    (u:any) => this.usuarios = u
  )
}
servicioBuscarUsuario():Observable<any>{
  return this.http.get<any>("http://localhost:8080/usuario/buscar");
}

agregarusuarioUbicacion(){
  this.usuario.usuarioubicacion.push({});
  
}



}