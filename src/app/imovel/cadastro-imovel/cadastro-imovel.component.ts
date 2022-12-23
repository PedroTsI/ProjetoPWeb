import { Component, OnInit } from '@angular/core';
import {IMOVEIS} from '../../shared/modelo/IMOVEIS';
import {Imovel} from '../../shared/modelo/imovel';
import {ActivatedRoute} from '@angular/router';
import {ImovelService} from '../../shared/servicos/imovel.service';
import {ImovelFirestoreService} from "../../shared/servicos/imovel-firestore.service";
import {MensagemService} from "../../shared/servicos/mensagem.service";
import {IMensagem} from "../../shared/servicos/IMensagem";

@Component({
  selector: 'app-cadastro-imovel',
  templateUrl: './cadastro-imovel.component.html',
  styleUrls: ['./cadastro-imovel.component.scss']
})
export class CadastroImovelComponent implements OnInit {

  imovelAtual: Imovel;

  inserindo = true;
  nomeBotao = 'Inserir';

  constructor(private rotaAtual: ActivatedRoute, private ImovelService: ImovelService, private MensagemService: MensagemService) {
    this.imovelAtual = new Imovel();
    if (rotaAtual.snapshot.paramMap.has('id')) {
      const idParaEdicao = rotaAtual.snapshot.paramMap.get('id');
      if (idParaEdicao) {
        this.inserindo = false;
        this.nomeBotao = 'Atualizar';
        const ImovelEncontrado = this.ImovelService.pesquisarPorId(idParaEdicao).subscribe(
          ImovelEncontrado => this.imovelAtual = ImovelEncontrado
        )
      }
    }
  }

  ngOnInit() {
  }

  inserirOuAtualizarImovel() {
    if (this.inserindo) {
      this.ImovelService.inserir(this.imovelAtual).subscribe(
        ImovelInserido => this.MensagemService.imovelcadastrado('Imovel cadastrado com sucesso')
      );
      this.imovelAtual = new Imovel();
    } else {
      this.ImovelService.atualizar(this.imovelAtual).subscribe(
             imovelAtualizado => this.MensagemService.imovelatualizado('Imovel atualizado com sucesso')
      )
    }

  }

  atualizaNumero(novoNumero: number) {
    this.imovelAtual.numero = novoNumero;
  }
}
