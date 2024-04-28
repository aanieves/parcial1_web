import { Component, OnInit } from '@angular/core';
import {ListarVehiculoModule} from "./listar-vehiculo/listar-vehiculo.module";

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  standalone: true,
  imports: [
    ListarVehiculoModule
  ],
})
export class VehiculoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
