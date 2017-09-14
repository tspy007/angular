import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { ArticuloComponent } from './articulo/articulo.component';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [ListaComponent, ArticuloComponent],
  exports: [
    ListaComponent, ArticuloComponent
  ]

})
export class ListacompraModule { }
