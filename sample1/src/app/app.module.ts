import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComunesModule } from "./comunes/comunes.module";
import { ComunicacionModule } from "./comunicacion/comunicacion.module";
import { ListacompraModule } from "./listacompra/listacompra.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ComunesModule,ComunicacionModule,ListacompraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
