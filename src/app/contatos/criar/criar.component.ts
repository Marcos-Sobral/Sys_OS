import { Component, OnInit } from '@angular/core';
import { Contato } from '../shared/contato';
import { ContatoService } from '../shared/contato.service';
import { ContatoDataService } from '../shared/contato-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {
  contato: Contato = new Contato();
  key: string = '';
  
  constructor(private contatoService: ContatoService, private contatoDataService: ContatoDataService, private router: Router) { }

  ngOnInit(): void {
    this.contato = new Contato();
  }

  onSubmit(): void {
    if (this.key) {
      this.contatoService.update(this.contato, this.key);
    } else {
      this.contatoService.insert(this.contato);
    }

    this.contato = new Contato();
    this.router.navigate(['contatolist/']);
  }
}
