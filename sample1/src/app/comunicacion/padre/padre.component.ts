import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  private titPadre: string

  constructor() { }

  ngOnInit() {
    this.titPadre="Titulo original";
  }

  CambiaTitulo(){
    if(this.titPadre=="Titulo original")
      this.titPadre="Titulo cambiado"
    else
      this.titPadre="Titulo original"
  }

}
