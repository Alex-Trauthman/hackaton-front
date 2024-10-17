import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exame } from '../models/exame.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExameService {
  private baseUrl = 'http://localhost:8081/exames';

  constructor(private httpClient: HttpClient) {
  }
  findAll(): Observable<Exame[]> {
    return this.httpClient.get<Exame[]>(this.baseUrl);
  }
}
