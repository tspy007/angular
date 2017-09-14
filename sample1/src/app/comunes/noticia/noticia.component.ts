import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  public parcial: boolean
  public textoboton: string

  constructor() { }

  ngOnInit() {
    this.parcial=true;
    this.textoboton="Mostrar"
  }

  cambiar(){
    this.parcial = !this.parcial;
    this.textoboton = this.parcial ? "Mostrar":"Ocultar"
  }

}
