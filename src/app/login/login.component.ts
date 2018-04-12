import { Component, OnInit } from '@angular/core';
import { Cliente } from '../domain/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cliente: Cliente[];

  constructor(private clienteService : ClienteService) { }

  ngOnInit() {
  }
  postCliente(){
    this.clienteService.postClientes()
    .subscribe(response => {
      this.cliente = response;
  })
  }
}
