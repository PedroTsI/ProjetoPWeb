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
  ImoveisVendidos: Imovel[];
  ImovelAVenda: Imovel[];


  constructor(private roteador: Router, private ImovelService: ImovelService) {
    this.Imovel = new Array<Imovel>();
    this.ImoveisVendidos = new Array<Imovel>();
    this.ImovelAVenda = new Array<Imovel>();
  }

  ngOnInit(): void {
    this.ImovelService.listar().subscribe(
      ImoveisRetornados => this.Imovel = ImoveisRetornados
    );
    this.ImovelService.listar().subscribe(
      ImoveisRetornados => this.ImoveisVendidos = ImoveisRetornados.filter(Imovel => Imovel.status == "vendido")
    );
    this.ImovelService.listar().subscribe(
      ImoveisRetornados => this.ImovelAVenda = ImoveisRetornados.filter(Imovel => Imovel.status == "a venda")
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
        const indxImovel = this.Imovel.findIndex(u => u.id === ImovelAVender.id);

        //  const indxImovel = this.Imovel.findIndex(u => u.id === ImovelARemover.id);
        //  const indxImovel = this.Imovel.findIndex(u => u.status === ImovelAVender.status);

        
        if (indxImovel > -1){
          this.ImovelAVenda.splice(indxImovel, 1);
          this.ImoveisVendidos.push(vendido);
        }
      }
    );
  }


}
