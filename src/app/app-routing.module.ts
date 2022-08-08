import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'clientes', component: ListadoClientesComponent},
  {path: 'crear-cliente',component: CrearClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
