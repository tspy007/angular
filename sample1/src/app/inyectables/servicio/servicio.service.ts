import { Injectable } from '@angular/core';

@Injectable()
export class ServicioService {

  constructor() { }

  elementoLista(cual: string) {
    let lista = ["Elemento 1","Elemento 2","Elemento 3"]

    return lista
  }

}
