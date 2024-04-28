import { bootstrapApplication } from '@angular/platform-browser';
import {VehiculoComponent} from "./vehiculo/vehiculo.component";

bootstrapApplication(VehiculoComponent)
  .catch((err) => console.error(err));
