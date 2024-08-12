import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutorizacaoService } from 'src/app/services/autorizacao.service';
import { UserService } from 'src/app/services/user.service';

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
  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router,
    private autorizacaoService:AutorizacaoService) {}

  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'O email é obrigatório'
    }
    return this.email.hasError('email') ? 'Você deve preencher um valor para o email válido' : '';
  }

  hasUnitNumber = false;

  loginClick(){
    if (this.autorizacaoService.obterLoginStatus())
      this.autorizacaoService.deslogar();
    else
      this.autorizacaoService.autorizar();
  }
  
  onSubmit(): void {
    if (this.autorizacaoService.obterLoginStatus())
    this.autorizacaoService.deslogar();
    else{
      //this.autorizacaoService.autorizar();
      this.service.login({user:'Marcos'}).subscribe({
        next: (response) => {
          console.log(response.IdToken)
          if(response.IdToken)
            this.autorizacaoService.autorizar();
            this.router.navigate(['/usuario']);
          //alert('Dado registrado com sucesso.')
         
        },
        error: (erro:any) => {
          //console.log(erro);
          //alert('Ocorreu algum erro.')
        }
       });
    }
  }
}
