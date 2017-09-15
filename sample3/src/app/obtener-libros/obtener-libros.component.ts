import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-obtener-libros',
  templateUrl: './obtener-libros.component.html',
  styleUrls: ['./obtener-libros.component.css']
})
export class ObtenerLibrosComponent implements OnInit {

  constructor(private http: Http) { }

  public books

  ngOnInit() {
  }

  buscarLibros(buscador: string) {
	
    this.books = [];
    let url ="https://www.googleapis.com/books/v1/volumes?q=intitle:"+buscador;
    
    this.http.get(url).subscribe(
      response => {
        let data = response.json();
        for (var i = 0; i < data.items.length; i++) {
          let bookTitle = data.items[i].volumeInfo.title;
          this.books.push(bookTitle);
        }
      },
      error => console.error(error)
    );
  }
}
