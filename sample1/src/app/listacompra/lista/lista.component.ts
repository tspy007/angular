import { Component, OnInit } from '@angular/core';
import { ElemArticulo} from '../listacompra.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

public articulos= new Array<ElemArticulo>()

public articulo: string

  constructor() { }

  ngOnInit() {
  }

  CargaArticulo(){
    let elemento={comprado:false,nombre:this.articulo}

    this.articulos.push(elemento)
  }

  BorrarElemento(ele: ElemArticulo ){
    let index = this.articulos.indexOf(ele)

    if(index!=-1) this.articulos.splice(index,1)

  }
}
