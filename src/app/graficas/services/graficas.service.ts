import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private httpClient: HttpClient) { }

  getNumeroUsuarios(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:3000/grafica');
  }
}
