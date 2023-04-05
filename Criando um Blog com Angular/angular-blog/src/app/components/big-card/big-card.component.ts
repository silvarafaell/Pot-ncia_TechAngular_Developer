import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit{

  @Input() //Propriedade Inputavel 
  photoCover:string = ""
  @Input() //Propriedade Inputavel 
  cardTitle:string = ""
  @Input() //Propriedade Inputavel 
  cardDescription:string = ""

  constructor() { }

  ngOnInit(): void{

  }

}
