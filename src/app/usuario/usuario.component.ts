import { Component,AfterViewInit, ElementRef, ViewChild  } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';// consumir servicio rest
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
//import { TiposPipe } from '../tipos.pipe';
import { LogoutComponent } from '../logout/logout.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ModalService } from '../modal.service';


@Component({
  selector: 'app-usuario',
  imports: [FormsModule,HttpClientModule,CommonModule,LogoutComponent,NavbarComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  usuarios:any=[];
  ubicaciones:any=[];
  ubicacion:any={};
  usuario:any={};


  constructor(private http:HttpClient){
    this.buscarUsuarios();
    this.buscarUbicaciones();
  }


  ingresar(){
    let formularioValido:any=document.getElementById("usuarioForm");
  
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
        "http://localhost:8080/usuario/guardar",
      this.usuario, httpOptions);
     
    }
  
  
  finalizarGuardar(u:any){
      this.buscarUsuarios();
      alert("Usuario guardado exitosamente!!")
  
    }


  buscarUsuarios(){
    this.servicioBuscarUsuarios().subscribe(
        (u:any)=> this.usuarios=u
    )
  }
  

servicioBuscarUsuarios():Observable<any>{
  return this.http.get<any>("http://localhost:8080/usuario/buscar");
}


buscarUbicaciones(){
  this.servicioBuscarUbicaciones().subscribe(
      (u:any)=> this.ubicaciones=u
  )
}


servicioBuscarUbicaciones():Observable<any>{
return this.http.get<any>("http://localhost:8080/ubicacion/buscar");
}



}
