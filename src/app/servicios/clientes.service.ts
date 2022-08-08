import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  endpointClientes: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get(this.endpointClientes)
                    .pipe(
                      map((data: any) => {
                        return data;
                      })
                    )
  }

  // cliente específico a actualizar
  getCliente(cif){
    return this.http.get(this.endpointClientes + '/' + cif).pipe(
      map((data: any) => {
        return data;
      })
    )
  }

  postClientes(cliente){
    return this.http.post(this.endpointClientes, cliente)
    .pipe(
      map((data: any) => {
        return data;
      })
    )
  }

}