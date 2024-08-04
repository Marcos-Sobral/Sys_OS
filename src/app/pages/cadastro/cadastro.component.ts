import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GenericValidator } from 'src/app/comum/validador';
import { User } from 'src/models/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  user: User = new User();
  addressForm = this.fb.group({
    id: "",
    name: [null, Validators.compose(
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
    )],
    email: [null, Validators.compose(
      [Validators.required, Validators.email]
    )],
    phone: [null, Validators.required],
    password: [null, Validators.compose(
      [Validators.required,Validators.minLength(6)]
    )],
    cpf: [null, Validators.compose(
      [Validators.required, GenericValidator.isValidCpf()]
    )],
    cnpj: [null, Validators.compose(
      [Validators.required, GenericValidator.isValidCnpj()]
    )],
  });
  email = this.addressForm.controls['email'];
  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'O email é obrigatório';
    }
    return this.email.hasError('email') ? 'Você deve preencher o campo Email': '';
  }


  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    this.user.id = '1';
    if(this.addressForm.controls['name'].value)
    this.user.name = this.addressForm.controls['name'].value;
    if(this.addressForm.controls['email'].value)
    this.user.email = this.addressForm.controls['email'].value;
    if(this.addressForm.controls['phone'].value)
    this.user.phone = this.addressForm.controls['phone'].value;
    if(this.addressForm.controls['password'].value)
    this.user.password = this.addressForm.controls['password'].value;
    if(this.addressForm.controls['cpf'].value)
    this.user.cpf = this.addressForm.controls['cpf'].value;
    if(this.addressForm.controls['cnpj'].value)
    this.user.cnpj = this.addressForm.controls['cnpj'].value;
    alert('Cadastro realizado');
    console.log(this.user);
    //localStorage.setItem('user', JSON.stringify(this.user));
  }
}
