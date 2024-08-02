import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AutorizacaoService } from 'src/app/services/autorizacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  addressForm = this.fb.group({
    email: [null, Validators.compose([
      Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(50)])
    ],
    password: [null, Validators.compose(
      [Validators.required, Validators.minLength(6)])
    ],
  });
  email =  this.addressForm.controls['email'];

  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'O email é obrigatório'
    }
    return this.email.hasError('email') ? 'Você deve preencher um valor para o email válido' : '';
  }

  hasUnitNumber = false;

  constructor(private fb: FormBuilder,
     private autorizacaoService:AutorizacaoService) {}

  loginClick(){
    if (this.autorizacaoService.obterLoginStatus())
      this.autorizacaoService.deslogar();
    else
      this.autorizacaoService.autorizar();
  }
  
  onSubmit(): void {
    this.loginClick();
    alert('Thanks!');
  }
}
