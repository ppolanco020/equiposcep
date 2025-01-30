import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-login',
  imports: [ButtonModule, InputGroupModule,InputGroupAddonModule,FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario:any = {};

  constructor(private http:HttpClient){
    let usuario = localStorage.getItem("usuario");
    if(usuario){
      location.href= "welcome";
    }
  }  


  login(){

    let formularioValido:any = document.getElementById("loginForm");

    if(formularioValido.reportValidity()){
      this.servicioLogin().subscribe(
        (u:any) => this.validarLogin(u)
      )
    }

  }

  validarLogin(u:any){

    if(u){
      location.href= "welcome";
      let t = JSON.stringify(u);
      localStorage.setItem("usuario",t);
    }
    else{
      alert("Usuario o password invalido.")
    }

  }
  servicioLogin(){
    let httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }

    return this.http.post(
      "http://localhost:8080/usuario/login",
      this.usuario,
      httpOptions);
  }



}
