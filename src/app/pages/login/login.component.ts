import { Component } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
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
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  /*email = this.addressForm.controls['email'];

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }*/

  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router,
    private autorizacaoService: AutorizacaoService) { }

  obterDescricaoLogin = () =>
    this.autorizacaoService.obterLoginStatus() ? "Estou Autorizado" : "Nao Estou Autorizado";

    onSubmit(): void {
      console.log("Botão de login clicado");
      if (this.autorizacaoService.obterLoginStatus()) {
        this.autorizacaoService.deslogar();
      } else {
        const formData = this.addressForm.value;
        console.log("Dados do formulário:", formData);
        
        this.service.login(formData).subscribe({
          next: (response) => {
            console.log("Resposta da API:", response);
            if (response.IdToken) {
              this.autorizacaoService.autorizar(response.IdToken);
              this.router.navigate(['/usuario']);
            }
          },
          error: (erro: any) => {
            console.log('Erro ao fazer login:', erro);
            alert("Usuário ou Senha inválido(s)!");
          }
        });
      }
    }
    
    
}