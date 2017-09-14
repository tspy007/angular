import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

@Input()
public titulo: string

@Output()
ocultar = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if(this.titulo==null)
      this.titulo="del hijo"
  }

  OcultarPadre(){
    this.ocultar.emit();
  }
}
