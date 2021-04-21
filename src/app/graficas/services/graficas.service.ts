import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private httpClient: HttpClient) { }

  getNumeroUsuarios(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:3000/grafica');
  }

  getUsuariosDona(){
    return this.getNumeroUsuarios()
          .pipe(
            map( datos => {
              const labels = Object.keys(datos);
              const values: number[] = Object.values(datos);
              return { labels, values };
            })
          )
  }
}
