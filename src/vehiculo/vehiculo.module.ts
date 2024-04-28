import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoComponent } from './vehiculo.component';
import { ListarVehiculoComponent } from './listar-vehiculo/listar-vehiculo.component';
import { VehiculoService } from './vehiculo.service';

@NgModule({
  declarations: [
    ListarVehiculoComponent
  ],
  imports: [
    CommonModule,
    VehiculoComponent,
    HttpClientModule
  ],
  providers: [
    VehiculoService
  ],
})
export class VehiculoModule { }
