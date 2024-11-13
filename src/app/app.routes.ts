import { Routes } from '@angular/router';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CrearComponent } from './components/crear/crear.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
    {path: '', component:ProyectosComponent},
    {path:'proyectos', component:ProyectosComponent},
    {path:'crear', component:CrearComponent},
    {path:'**', component:ErrorComponent}
];
