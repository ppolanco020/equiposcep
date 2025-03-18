import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';// consumir servicio rest
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from '../logout/logout.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { UbicacionPipe } from '../ubicacion.pipe';
import { ModalService } from '../modal.service';


@Component({
  selector: 'app-usuario',
  imports: [FormsModule,HttpClientModule,CommonModule,LogoutComponent,NavbarComponent,UbicacionPipe],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  usuarios:any=[];
  ubicaciones:any=[];
  ubicacion:any={};
  usuario:any={};
  emailfiltrados: any=[];
  valorBuscado: string='';
  result: any={};
  verificadorbusqueda:boolean=false
  verificadorbusqueda2:boolean=false

  constructor(private http:HttpClient){
    this.buscarUsuarios();
    this.buscarUbicaciones();
    this.buscarbyEmail();

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
  //  this.limpiarFormulario();
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




onSearch(){


    this.buscarbyEmail();

    this.result = `Has buscado: ${this.valorBuscado}`;



}

onInputChange() {
  if (this.valorBuscado.length ==0) {
    this.buscarUsuarios();
  }


}


buscarbyEmail(){

//this.buscarUsuarios();


  this.servicioBuscarbyEmail().subscribe(
     (u:any)=> this.usuarios=u
  )

}
  



servicioBuscarbyEmail():Observable<any> {
  return this.http.get<any>(`http://localhost:8080/usuario/buscar/${this.valorBuscado}`);

   }
 

   
limpiarFormulario() {
  this.usuarios=""; // Resetea todos los campos del formulario
}

}