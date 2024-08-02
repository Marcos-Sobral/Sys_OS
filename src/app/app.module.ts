import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { MainComponent } from './pages/main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { ManipulandoJsonComponent } from './pages/manipulando-json/manipulando-json.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './component/user/user.component';
import { FormsModule } from '@angular/forms';
import { SubeRouteComponent } from './pages/sube-route/sube-route.component';
import { Page1Component } from './pages/sube-route/page1/page1.component';
import { Page2Component } from './pages/sube-route/page2/page2.component';
import { PrivadoComponent } from './pages/privado/privado.component';
import { DetalheComponent } from './pages/detalhe/detalhe.component';
import { ListaSimplesComponent } from './pages/lista-simples/lista-simples.component';
import { EditarComponent } from './pages/editar/editar.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarComponent,
    MainComponent,
    CadastroComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ManipulandoJsonComponent,
    UserComponent,
    SubeRouteComponent,
    Page1Component,
    Page2Component,
    PrivadoComponent,
    DetalheComponent,
    ListaSimplesComponent,
    EditarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      validation: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
