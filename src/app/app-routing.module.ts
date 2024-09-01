import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ListarComponent } from './pages/listar/listar.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ManipulandoJsonComponent } from './pages/manipulando-json/manipulando-json.component';
import { SubeRouteComponent } from './pages/sube-route/sube-route.component';
import { Page1Component } from './pages/sube-route/page1/page1.component';
import { Page2Component } from './pages/sube-route/page2/page2.component';
import { PrivadoComponent } from './pages/privado/privado.component';
import { AutorizadoGuard } from './guards/autorizado.guard';
import { DetalheComponent } from './pages/detalhe/detalhe.component';
import { ListaSimplesComponent } from './pages/lista-simples/lista-simples.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ModalComponent } from './pages/modal/modal.component';
import { TabelaComponent } from './pages/tabela/tabela.component';
import { AuthTestComponent } from './pages/auth-test/auth-test.component';
import { EditComponent } from './contatos/edit/edit.component';
import { ListComponent } from './contatos/list/list.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'editar', component: EditarComponent},
  {path:'listar', component: ListarComponent},
  {path:'tabela', component: TabelaComponent},
  {path:'listaSimples', component:ListaSimplesComponent},
  {path:'detalhe/:id/:phone', component: DetalheComponent},
  {path:'login', component: LoginComponent},
  {path:'auth', component: AuthTestComponent},
  {path:'usuario', component: UsuarioComponent},
  {path:'modal', component: ModalComponent},
  {path:'json', component: ManipulandoJsonComponent},
  {path:'subroute', component: SubeRouteComponent, 
    children: [
      {path:'page1', component: Page1Component},
      {path:'page2', component: Page2Component}
    ]
 
  },
  {path:'privado', component: PrivadoComponent, 
    canActivate: [AutorizadoGuard]
  },
  { path: 'pages/lazy', loadChildren: () => import('./pages/lazy/lazy.module').then(m => m.LazyModule) },
  {path:'contatoedit', component: EditComponent},
  {path:'contatolist', component: ListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
