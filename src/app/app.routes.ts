import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Adjust the path as necessary
import { PacienteListComponent } from './paciente/paciente-list/paciente-list.component';
import { PacienteFormComponent } from './paciente/paciente-form/paciente-form.component';
import { TarefaListComponent } from './components/tarefa/tarefa-list/tarefa-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'pacientes', component: PacienteListComponent},
  { path: 'pacientes/form', component: PacienteFormComponent},
  { path: 'tarefas', component: TarefaListComponent },
  // Other routes here
];