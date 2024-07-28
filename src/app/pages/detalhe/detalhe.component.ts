import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  indetificador:number = 0;
  ngOnInit(): void {
    this.route.params.forEach((params: Params) =>{
      if(params['id'] !== undefined){
        this.indetificador = +params['id'];
        console.log(this.indetificador);
      }
    })
  }

}
