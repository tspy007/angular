import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { IdeasComponent } from './ideas/ideas.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { OtroformularioComponent } from './otroformulario/otroformulario.component';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [CabeceraComponent,PieComponent, FormularioComponent, IdeasComponent, NoticiaComponent, OtroformularioComponent],
  exports: [
    CabeceraComponent,PieComponent,FormularioComponent, IdeasComponent, NoticiaComponent, OtroformularioComponent
  ]
})
export class ComunesModule { }
