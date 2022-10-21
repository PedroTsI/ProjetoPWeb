import { Component, OnInit } from '@angular/core';
import {IMOVEIS} from '../../shared/modelo/IMOVEIS';
import {Imovel} from '../../shared/modelo/imovel';
import {ActivatedRoute} from '@angular/router';
import {ImovelService} from '../../shared/servicos/imovel.service';

@Component({
  selector: 'app-cadastro-imovel',
  templateUrl: './cadastro-imovel.component.html',
  styleUrls: ['./cadastro-imovel.component.scss']
})
export class CadastroImovelComponent implements OnInit {

  imovelAtual: Imovel;

  inserindo = true;
  nomeBotao = 'Inserir';

  constructor(private rotaAtual: ActivatedRoute, private ImovelService: ImovelService) {
    this.imovelAtual = new Imovel('', '', 0, '', 0, '', '');
    if (rotaAtual.snapshot.paramMap.has('id')) {
      const idParaEdicao = rotaAtual.snapshot.paramMap.get('id');
      if (idParaEdicao) {
        this.inserindo = false;
        this.nomeBotao = 'Atualizar';
        const imovelEncontrado = this.ImovelService.pesquisarPorId(idParaEdicao).subscribe(
          imovelEncontrado => this.imovelAtual = imovelEncontrado
        )
      }
    }
  }

  ngOnInit() {
  }

  inserirOuAtualizarImovel() {
    if (this.inserindo) {
      this.ImovelService.inserir(this.imovelAtual).subscribe(
        imovelInserido => console.log(imovelInserido)
      );
      this.imovelAtual = new Imovel('', '', 0, '', 0, '', '');
    } else {
      this.ImovelService.atualizar(this.imovelAtual).subscribe(
        imovelAtualizado => console.log(imovelAtualizado)
      )
    }
  }

  atualizaNumero(novoNumero: number) {
    this.imovelAtual.numero = novoNumero;
  }
}
