import { Component, OnInit } from '@angular/core';

  interface elemProvincia {
    id: number,
    nombre: string
  }

@Component({
  selector: 'app-otroformulario',
  templateUrl: './otroformulario.component.html',
  styleUrls: ['./otroformulario.component.css']
})
export class OtroformularioComponent implements OnInit {


  public provincias: Array<elemProvincia>
  public resultado: elemProvincia

  public opciones: Array<Object>

  public radiosel: string

  constructor() { }

  ngOnInit() {

    this.provincias = [
      {id:1,nombre:"Madrid"},
      {id:2,nombre:"Barcelona"},
      {id:3,nombre:"Bilbao"},
      {id:4,nombre:"Castilla la mancha"},
      {id:5,nombre:"Castilla Leon"},
    ]

    this.resultado=this.provincias[0]

    this.opciones = [
      {valor:"Opcion 1",selected:false},
      {valor:"Opcion 2",selected:false},
    ]

    this.radiosel="radio 1"
  }
}
