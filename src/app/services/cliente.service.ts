import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Cliente } from '../domain/cliente';

@Injectable()
export class ClienteService {

  constructor(private http : HttpClient) { }

  postClientes() : Observable<Cliente[]>{
    return this.http.post<Cliente[]>(`https://7345ae0f-6b5f-435e-b200-ce66acca7085.mock.pstmn.io/usuarios`)
  }
}
