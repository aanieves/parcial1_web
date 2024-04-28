import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListarVehiculoComponent } from './listar-vehiculo.component';
import { VehiculoService } from '../vehiculo.service';

@NgModule({
  declarations: [
    ListarVehiculoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    VehiculoService
  ],
  exports: [
    ListarVehiculoComponent
  ]
})
export class ListarVehiculoModule { }
