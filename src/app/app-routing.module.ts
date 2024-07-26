import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ListarComponent } from './pages/listar/listar.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'listar', component: ListarComponent},
  {path:'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
