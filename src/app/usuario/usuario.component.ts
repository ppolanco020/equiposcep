import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';// consumir servicio rest
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
//import { TiposPipe } from '../tipos.pipe';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-usuario',
  imports: [FormsModule,HttpClientModule,CommonModule,LogoutComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  usuarios:any=[];
  usuario:any={};

  constructor(private http:HttpClient){
    this.buscarUsuarios();
 
  }



  ingresar(){
    let formularioValido:any=document.getElementById("ingredienteForm");
  
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



}
