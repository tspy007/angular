import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConsumidorComponent } from './consumidor/consumidor.component';
import { ServicioService } from './servicio/servicio.service';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [ConsumidorComponent],
  exports: [
    ConsumidorComponent
  ],
  providers: [ServicioService]
})
export class InyectablesModule { }
