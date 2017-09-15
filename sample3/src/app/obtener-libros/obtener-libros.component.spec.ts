import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerLibrosComponent } from './obtener-libros.component';

describe('ObtenerLibrosComponent', () => {
  let component: ObtenerLibrosComponent;
  let fixture: ComponentFixture<ObtenerLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtenerLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
