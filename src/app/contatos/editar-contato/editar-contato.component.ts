import { Component, OnInit } from '@angular/core';
import { ContatoDataService } from '../shared/contato-data.service';
import { ContatoService } from '../shared/contato.service';
import { Contato } from '../shared/contato';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-contato',
  templateUrl: './editar-contato.component.html',
  styleUrls: ['./editar-contato.component.css']
})
export class EditarContatoComponent implements OnInit {
  contato: Contato = new Contato();
  key: string = '';

  constructor(private contatoService: ContatoService, private contatoDataService: ContatoDataService, private router: Router) { }

  ngOnInit(): void {
    this.contatoDataService.currentContato.subscribe(data => {
      if (data && data.contato && data.key) {
        this.contato = { ...data.contato }; // Usar spread operator para copiar os dados
        this.key = data.key;
      }
    });
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
