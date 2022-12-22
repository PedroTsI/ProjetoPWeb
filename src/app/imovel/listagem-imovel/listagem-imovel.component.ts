import { Component, OnInit } from '@angular/core';
import {IMOVEIS} from '../../shared/modelo/IMOVEIS';
import {Imovel} from '../../shared/modelo/imovel';
import {Router} from '@angular/router';
import {ImovelService} from '../../shared/servicos/imovel.service';
import {ImovelFirestoreService} from "../../shared/servicos/imovel-firestore.service";

@Component({
  selector: 'app-listagem-imovel',
  templateUrl: './listagem-imovel.component.html',
  styleUrls: ['./listagem-imovel.component.scss']
})
export class ListagemImovelComponent implements OnInit {

  imovel: Imovel[];
  imovelVendidos: Imovel[];
  imovelAVenda: Imovel[];


  constructor(private roteador: Router, private ImovelService: ImovelService) {
    this.imovel = new Array<Imovel>();
    this.imovelVendidos = new Array<Imovel>();
    this.imovelAVenda = new Array<Imovel>();
  }

  ngOnInit(): void {
    this.ImovelService.listar().subscribe(
      (ImovelRetornados: Array<Imovel>) => this.imovelVendidos = ImovelRetornados.filter(Imovel => Imovel.status == "vendido")
    );
    this.ImovelService.listar().subscribe(
      (ImovelRetornados: Array<Imovel>) => this.imovelAVenda = ImovelRetornados.filter(Imovel => Imovel.status == "a venda")
    );
  }

  removerImovelAVenda(imovelARemover: Imovel): void {
    if (imovelARemover.id){
      this.ImovelService.apagar(imovelARemover.id).subscribe(
        removido => {
          console.log(removido);
          const indxImovel = this.imovelAVenda.findIndex(u => u.id === imovelARemover.id);

          if (indxImovel > -1) {
            this.imovelAVenda.splice(indxImovel, 1);
          }
         }
      );
     }
  }
  removerImovelVendido(imovelARemover: Imovel): void {
    if (imovelARemover.id){
      this.ImovelService.apagar(imovelARemover.id).subscribe(
        removido => {
          console.log(removido);
          const indxImovel = this.imovelVendidos.findIndex(u => u.id === imovelARemover.id);

          if (indxImovel > -1) {
            this.imovelVendidos.splice(indxImovel, 1);
          }
        }
      );
    }
  }
  atualizarVenda(imovelAVender: Imovel): void {
    imovelAVender.status = 'vendido';
    this.ImovelService.atualizar(imovelAVender).subscribe(
      vendido => {
        console.log(vendido);
        const indxImovel = this.imovelAVenda.findIndex(u => u.id === imovelAVender.id);
        if (indxImovel > -1){
          this.imovelAVenda.splice(indxImovel, 1);
          this.imovelVendidos.push(imovelAVender);
        }
      }
    );
  }


}
