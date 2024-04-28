import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarVehiculoComponent } from './listar-vehiculo/listar-vehiculo.component';
import { VehiculoService } from './vehiculo.service';
import { of } from 'rxjs';
import { Vehiculo } from './vehiculo'
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListarVehiculoComponent', () => {
  let component: ListarVehiculoComponent;
  let fixture: ComponentFixture<ListarVehiculoComponent>;
  let vehiculoServiceSpy: jasmine.SpyObj<VehiculoService>;

  beforeEach(async () => {
    vehiculoServiceSpy = jasmine.createSpyObj('VehiculoService', ['getVehiculos']);

    await TestBed.configureTestingModule({
      declarations: [ ListarVehiculoComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ { provide: VehiculoService, useValue: vehiculoServiceSpy } ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVehiculoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create table with header and three rows', () => {
    const vehiculos: Vehiculo[] = [
      { id: 1, marca: 'Renault', linea: 'Kangoo', referencia: 'VU Express', modelo: 2017, kilometraje: 93272, color: 'Blanco', imagen: 'https://example.com/image1.jpg' },
      { id: 2, marca: 'Chevrolet', linea: 'Spark', referencia: 'Life', modelo: 2018, kilometraje: 55926, color: 'Plata', imagen: 'https://example.com/image2.jpg' },
      { id: 3, marca: 'Nissan', linea: 'March', referencia: 'Active Plus', modelo: 2019, kilometraje: 31298, color: 'Plata', imagen: 'https://example.com/image3.jpg' }
    ];

    vehiculoServiceSpy.getVehiculos.and.returnValue(of(vehiculos));

    fixture.detectChanges();

    const table = fixture.nativeElement.querySelector('table');
    const headerRow = table.querySelectorAll('thead tr th');
    const bodyRows = table.querySelectorAll('tbody tr');

    expect(headerRow.length).toBe(4);
    expect(bodyRows.length).toBe(3);
  });
});
