import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
      firstName: [this.user.firstName, Validators.compose(
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      )],
      email: [this.user.email, Validators.compose(
        [Validators.required, Validators.email]
      )],
      phone: [this.user.phone, Validators.required],
      password: [this.user.password, Validators.compose(
        [Validators.required,Validators.minLength(6)]
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
    if(this.addressForm.controls['firstName'].value)
    this.user.firstName = this.addressForm.controls['firstName'].value;
    if(this.addressForm.controls['email'].value)
    this.user.email = this.addressForm.controls['email'].value;
    if(this.addressForm.controls['phone'].value)
    this.user.phone = this.addressForm.controls['phone'].value;
    if(this.addressForm.controls['password'].value)
    this.user.password = this.addressForm.controls['password'].value;
    alert('Alteração realizada');
    console.log(this.user);
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
