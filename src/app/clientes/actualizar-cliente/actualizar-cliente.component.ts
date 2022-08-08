import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {
  cif: string; 
  constructor(private route: ActivatedRoute,
              private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.cif = this.route.snapshot.params['cif'];
    this.clientesService.getCliente(this.cif)
    .subscribe((res: any)=>{
      console.log(res);
    }, (err: any)=>{
      console.log(err);
    })
  }

}
