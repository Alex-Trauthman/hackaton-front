import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Adjust the path as necessary
import { PacienteListComponent } from './paciente/paciente-list/paciente-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'pacientes', component: PacienteListComponent},
  // Other routes here
];