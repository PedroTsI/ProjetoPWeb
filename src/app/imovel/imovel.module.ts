import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroImovelComponent } from './cadastro-imovel/cadastro-imovel.component';
import { ListagemImovelComponent } from './listagem-imovel/listagem-imovel.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FlexModule} from '@angular/flex-layout';
import { CadastroListagemComponent } from './cadastro-listagem/cadastro-listagem.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {PipesModule} from "../shared/pipes/pipes.module";



@NgModule({
  declarations: [
    CadastroImovelComponent,
    ListagemImovelComponent,
    CadastroListagemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexModule,
    RouterModule,
    HttpClientModule,
    PipesModule
  ],
  exports: [
    CadastroImovelComponent,
    ListagemImovelComponent,
    CadastroListagemComponent
  ]
})
export class ImovelModule { }
