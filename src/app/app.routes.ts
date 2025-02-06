import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EquipoComponent } from './equipo/equipo.component';
import { UsuarioCrearComponent } from './usuario.crear/usuario.crear.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'welcome',component:BienvenidaComponent},
    {path:'usuario',component:UsuarioComponent},
    {path:'equipo',component:EquipoComponent},
    {path:'crearUsuario',component:UsuarioCrearComponent},
    {path:'dashboard',component:DashboardComponent}
];
