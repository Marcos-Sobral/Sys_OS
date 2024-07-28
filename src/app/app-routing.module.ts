import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ListarComponent } from './pages/listar/listar.component';
import { LoginComponent } from './pages/login/login.component';
import { ManipulandoJsonComponent } from './pages/manipulando-json/manipulando-json.component';
import { SubeRouteComponent } from './pages/sube-route/sube-route.component';
import { Page1Component } from './pages/sube-route/page1/page1.component';
import { Page2Component } from './pages/sube-route/page2/page2.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'listar', component: ListarComponent},
  {path:'login', component: LoginComponent},
  {path:'json', component: ManipulandoJsonComponent},
  {path:'subroute', component: SubeRouteComponent, 
    children: [
      {path:'page1', component: Page1Component},
      {path:'page2', component: Page2Component}
    ]
 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
