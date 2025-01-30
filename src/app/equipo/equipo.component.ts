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

}
