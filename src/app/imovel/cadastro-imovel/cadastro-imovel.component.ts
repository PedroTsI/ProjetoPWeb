import { Component, OnInit } from '@angular/core';
import {IMOVEIS} from '../../shared/modelo/IMOVEIS';
import {Imovel} from '../../shared/modelo/imovel';
import {ActivatedRoute} from '@angular/router';
import {ImovelService} from '../../shared/servicos/imovel.service';
import {ImovelFirestoreService} from "../../shared/servicos/imovel-firestore.service";

@Component({
  selector: 'app-cadastro-imovel',
  templateUrl: './cadastro-imovel.component.html',
  styleUrls: ['./cadastro-imovel.component.scss']
})
export class CadastroImovelComponent implements OnInit {

  ImovelAtual: Imovel;

  inserindo = true;
  nomeBotao = 'Inserir';

  constructor(private rotaAtual: ActivatedRoute, private ImovelService: ImovelService) {
    this.ImovelAtual = new Imovel();
    if (rotaAtual.snapshot.paramMap.has('id')) {
      const idParaEdicao = rotaAtual.snapshot.paramMap.get('id');
      if (idParaEdicao) {
        this.inserindo = false;
        this.nomeBotao = 'Atualizar';
        const ImovelEncontrado = this.ImovelService.pesquisarPorId(idParaEdicao).subscribe(
          ImovelEncontrado => this.ImovelAtual = ImovelEncontrado
        )
      }
    }
  }

  ngOnInit() {
  }

  inserirOuAtualizarImovel() {
    if (this.inserindo) {
      this.ImovelService.inserir(this.ImovelAtual).subscribe(
        ImovelInserido => console.log(ImovelInserido)
      );
      this.ImovelAtual = new Imovel();
    } else {
      this.ImovelService.atualizar(this.ImovelAtual).subscribe(
        ImovelAtualizado => console.log(ImovelAtualizado)
      )
    }
  }

  atualizaNumero(novoNumero: number) {
    this.ImovelAtual.numero = novoNumero;
  }
}
