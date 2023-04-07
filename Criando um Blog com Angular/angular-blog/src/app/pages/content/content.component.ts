import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  photoCover:string = "https://uploads.jovemnerd.com.br/wp-content/uploads/2022/07/tony_stark_vingadores_ultimato_cena__70kqp20-1210x544.jpg"
  contentTitle:string = "NOTICIA EXEMPLO"
  contentDescription:string = "BLA BLA BLA"

  constructor() {}

  ngOnInit(): void {
    
  }

}
