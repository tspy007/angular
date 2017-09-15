import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComunesModule } from "./comunes/comunes.module";
import { ComunicacionModule } from "./comunicacion/comunicacion.module";
import { ListacompraModule } from "./listacompra/listacompra.module";
import { InyectablesModule } from "./inyectables/inyectables.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ComunesModule,ComunicacionModule,ListacompraModule,InyectablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
