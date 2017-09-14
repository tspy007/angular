import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {

  public ideas = new Array<string>()
  public idea: string 

  constructor() { }

  ngOnInit() {
  }

  agregaIdea(){
    this.ideas.push(this.idea)
  }
}
