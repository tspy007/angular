import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ElemArticulo} from '../listacompra.model';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

@Input()
  public datos: ElemArticulo

@Output()
  private borrar = new EventEmitter<any>()

BorrarElemento(){
    this.borrar.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
