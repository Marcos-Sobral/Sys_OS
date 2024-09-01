import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContatoService } from '../shared/contato.service';
import { Contato } from '../shared/contato';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  contatos: Observable<any> | undefined;
  constructor(private contatoService: ContatoService, private contatoDataService: ContatoService) { }

  ngOnInit(): void {
    this.contatos = this.contatoDataService.getAll();
  }

  delete(key: string) {

  }

  edit(contato: Contato, key: string){

  }

}
