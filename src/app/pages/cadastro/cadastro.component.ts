import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  addressForm = this.fb.group({
    id: "",
    firstName: [null, Validators.compose(
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
    )],
    email: [null, Validators.compose(
      [Validators.required, Validators.email]
    )],
    phone: [null, Validators.required],
    password: [null, Validators.compose(
      [Validators.required,Validators.minLength(6)]
    )]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Entrou no submit');
  }
}
