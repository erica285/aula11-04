import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
  servicoService: any;

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

  getServico(){
    this.servicoService.getClientes()
    .subscribe(response => {
      this.getServico = response;
    
  })
  }
}
