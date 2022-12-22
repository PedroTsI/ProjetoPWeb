import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {ListagemImovelComponent} from './imovel/listagem-imovel/listagem-imovel.component';
import {ImovelModule} from './imovel/imovel.module';
import {LayoutModule} from './layout/layout.module';
import {MensagemService} from './shared/servicos/mensagem.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {IMensagem} from "./shared/servicos/IMensagem";
import {PipesModule} from "./shared/pipes/pipes.module";
import { FirestoreModule } from './firestore/firestore.module';
import {LoginComponent} from "./layout/login/login.component";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatSnackBarModule,
    ImovelModule,
    LayoutModule,
    PipesModule,
    FirestoreModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [{
    provide: IMensagem,
    useClass: MensagemService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
