import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  public autor: string
  public fecha: string

  constructor() { }

  ngOnInit() {
    this.autor = "Yo soy el autor"
    this.fecha = "En el año del señor de 2017"
  }

}
