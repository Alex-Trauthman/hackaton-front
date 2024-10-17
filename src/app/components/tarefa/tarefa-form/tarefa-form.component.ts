import { Component } from '@angular/core';
import { HeaderComponent } from "../../../header/header.component";

@Component({
  selector: 'app-tarefa-form',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './tarefa-form.component.html',
  styleUrl: './tarefa-form.component.css'
})
export class TarefaFormComponent {

}
