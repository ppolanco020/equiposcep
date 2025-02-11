import { Component } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';

import { FormsModule } from '@angular/forms'; // sirve para usar el ng model , sirve para poder linkear el controlador con la vista
import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';// consumir servicio rest
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

import { PrimeNG } from 'primeng/config';
import { MenuModule } from 'primeng/menu';


@Component({
  selector: 'app-bienvenida',
  imports: [FormsModule,HttpClientModule,CommonModule,LogoutComponent,MenuModule],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent {
  usuarios:any=[];

  constructor(private http:HttpClient){
    this.buscarUsuarios();
 
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
