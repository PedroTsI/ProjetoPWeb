import { Component, OnInit } from '@angular/core';
import {IMOVEIS} from '../../shared/modelo/IMOVEIS';
import {Imovel} from '../../shared/modelo/imovel';
import {Router} from '@angular/router';
import {ImovelService} from '../../shared/servicos/imovel.service';

@Component({
  selector: 'app-listagem-imovel',
  templateUrl: './listagem-imovel.component.html',
  styleUrls: ['./listagem-imovel.component.scss']
})
export class ListagemImovelComponent implements OnInit {

  Imovel: Imovel[];
  ImovelVendidos: Imovel[];
  ImovelAVenda: Imovel[];


  constructor(private roteador: Router, private ImovelService: ImovelService) {
    this.Imovel = new Array<Imovel>();
    this.ImovelVendidos = new Array<Imovel>();
    this.ImovelAVenda = new Array<Imovel>();
  }

  ngOnInit(): void {
    this.ImovelService.listar().subscribe(
      ImovelRetornados => this.Imovel = ImovelRetornados
    );
    this.ImovelService.listar().subscribe(
      ImovelRetornados => this.ImovelVendidos = ImovelRetornados.filter(Imovel => Imovel.status == "vendido")
    );
    this.ImovelService.listar().subscribe(
      ImovelRetornados => this.ImovelAVenda = ImovelRetornados.filter(Imovel => Imovel.status == "a venda")
    );
  }

  removerImovel(ImovelARemover: Imovel): void {
    this.ImovelService.apagar(ImovelARemover.id).subscribe(
      removido => {
        console.log(removido);
        const indxImovel = this.Imovel.findIndex(u => u.id === ImovelARemover.id);

        if (indxImovel > -1) {
          this.Imovel.splice(indxImovel, 1);
        }

      }
    );
  }
  atualizarVenda(ImovelAVender: Imovel): void {
    this.ImovelService.atualizarVenda(ImovelAVender, "vendido").subscribe(
      vendido => {
        console.log(vendido);
        const indxImovel = this.Imovel.findIndex(u => u.status === ImovelAVender.status);

        if (indxImovel > -1){
          this.ImovelAVenda.splice(indxImovel, 1, vendido);
          this.ImovelVendidos.push(vendido);
        }
      }
    );
  }


}
