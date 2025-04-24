import { Routes } from '@angular/router';
import { ProfesorComponent } from './profesor/profesor.component';
import { LoginComponent } from './login/login.component';
import { AlumnoComponent } from './alumno/alumno.component';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'profesores',component:ProfesorComponent},
    {path:'alumnos',component:AlumnoComponent}
];
