import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListagemImovelComponent} from './imovel/listagem-imovel/listagem-imovel.component';
import {CadastroImovelComponent} from './imovel/cadastro-imovel/cadastro-imovel.component';
import {CadastroListagemComponent} from './imovel/cadastro-listagem/cadastro-listagem.component';
import {LoginComponent} from './layout/login/login.component';

const routes: Routes = [
  {
    path: "listagemimoveis",
    component: ListagemImovelComponent
  },
  {
    path: "cadastroimovel",
    component: CadastroImovelComponent
  },
  {
    path: "editaimovel/:id",
    component: CadastroImovelComponent
  },
  {
    path: "cadastrolistaimoveis",
    component: CadastroListagemComponent
  },
  {
    path: "",
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
