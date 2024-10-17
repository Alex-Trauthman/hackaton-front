import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private baseUrl = 'http://localhost:8081/pacientes';

  constructor(private httpClient: HttpClient) {
  }
}
