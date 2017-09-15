import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio/servicio.service'

@Component({
  selector: 'app-consumidor',
  templateUrl: './consumidor.component.html',
  styleUrls: ['./consumidor.component.css']
})
export class ConsumidorComponent implements OnInit {

  public buscador: string
  public libros: string[]

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
  }

  buscarLibros(buscador: string){
    this.libros = this.servicioService.elementoLista(buscador)
  }

}
