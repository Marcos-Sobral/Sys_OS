import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GenericValidator } from 'src/app/comum/validador';
import { User } from 'src/models/user';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent{
  user: User = new User();
  addressForm: any;
  email:any;
  
  constructor(private fb: FormBuilder) {
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user') || '()');
    }
    this.addressForm = this.fb.group({
      id: "",
      name: [this.user.name, Validators.compose(
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      )],
      email: [this.user.email, Validators.compose(
        [Validators.required, Validators.email]
      )],
      phone: [this.user.phone, Validators.required],
      password: [this.user.password, Validators.compose(
        [Validators.required,Validators.minLength(6)]
      )],
      cpf: [this.user.cpf, Validators.compose(
        [Validators.required, GenericValidator.isValidCpf()]
      )],
      cnpj: [this.user.cnpj, Validators.compose(
        [Validators.required, GenericValidator.isValidCnpj()]
      )]
    });
    this.email = this.addressForm.controls['email'];
  }

  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'O email é obrigatório';
    }
    return this.email.hasError('email') ? 'Você deve preencher o campo Email': '';
  }


  hasUnitNumber = false;

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
    alert('Alteração realizada');
    console.log(this.user);
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
