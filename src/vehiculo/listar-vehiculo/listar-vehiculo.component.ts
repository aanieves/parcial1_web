import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',
})
export class ListarVehiculoComponent implements OnInit {
  vehiculos!: Vehiculo[];
  totalRenault: number = 0;
  totalChevrolet: number = 0;
  totalNissan: number = 0;

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit(): void {
    this.getVehiculos();
  }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos()
      .subscribe(vehiculos => {
        this.vehiculos = vehiculos;
        this.calcularTotales();
      });
  }

  calcularTotales(): void {
    this.totalRenault = this.vehiculos.filter(vehiculo => vehiculo.marca === 'Renault').length;
    this.totalChevrolet = this.vehiculos.filter(vehiculo => vehiculo.marca === 'Chevrolet').length;
    this.totalNissan = this.vehiculos.filter(vehiculo => vehiculo.marca === 'Nissan').length;
  }
}
