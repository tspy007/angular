import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  public id: number

  constructor(activatedRoute: ActivatedRoute) { 
    this.id=activatedRoute.snapshot.params["id"];

  }

  ngOnInit() {
  }

}
