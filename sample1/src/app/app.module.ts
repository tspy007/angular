import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComunesModule } from "./comunes/comunes.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ComunesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
