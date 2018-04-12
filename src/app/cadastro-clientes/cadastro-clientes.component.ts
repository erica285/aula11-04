import { Component, OnInit } from '@angular/core';
import { Cliente } from '../domain/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  cliente: any;

cadastroClientes : Cliente[];


  constructor(private clienteService : ClienteService) {
    this.postCliente();

   }

  ngOnInit() {
  }

  postCliente(){
    this.clienteService.postClientes()
    .subscribe(response => {
      this.cliente = response;
    
  })
  }
}
