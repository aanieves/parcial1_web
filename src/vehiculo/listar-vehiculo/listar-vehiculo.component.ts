import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',
})
export class ListarVehiculoComponent implements OnInit {
  vehiculos!: Vehiculo[];

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit(): void {
    this.getVehiculos();
  }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos()
      .subscribe(vehiculos => {
        this.vehiculos = vehiculos;
      });
  }

  calcularTotales(): void {
  }
}
