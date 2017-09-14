import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroformularioComponent } from './otroformulario.component';

describe('OtroformularioComponent', () => {
  let component: OtroformularioComponent;
  let fixture: ComponentFixture<OtroformularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtroformularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtroformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
