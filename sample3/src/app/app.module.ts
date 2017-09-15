import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { Routing } from './app.routing';
import { ObtenerLibrosComponent } from './obtener-libros/obtener-libros.component'

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    ObtenerLibrosComponent
  ],
  imports: [
    BrowserModule, Routing, FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
