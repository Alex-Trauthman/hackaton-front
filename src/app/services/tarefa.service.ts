import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private baseUrl = 'http://localhost:8081/tarefas';

  constructor(private httpClient: HttpClient) {
  }
}
