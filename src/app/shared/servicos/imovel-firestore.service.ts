import { Injectable } from '@angular/core';
import {from, Observable} from "rxjs";
import {Imovel} from "../modelo/imovel";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ImovelFirestoreService {
  colecaoImoveis: AngularFirestoreCollection<Imovel>;
  NOME_COLECAO = 'imoveis';

  constructor(private afs: AngularFirestore) {
    this.colecaoImoveis = afs.collection(this.NOME_COLECAO);
  }listar(): Observable<Imovel[]> {
    return this.colecaoImoveis.valueChanges({idField: 'id'});
  }

  inserir(imovel: Imovel): Observable<object> {
    delete imovel.id;
    return from(this.colecaoImoveis.add(Object.assign({}, imovel)));
  }

  remover(id: string): Observable<void> {
    return from(this.colecaoImoveis.doc(id).delete());
  }

  pesquisarPorId(id: string): Observable<Imovel> {
    return this.colecaoImoveis.doc(id).get().pipe(map(document => new Imovel(document.id, document.data())));
  }

  atualizar(imovel: Imovel): Observable<void> {
    delete imovel.id;
    return from(this.colecaoImoveis.doc(imovel.id).update(Object.assign({}, imovel)));
  }

  listarMaioresDeIdade(): Observable<Imovel[]> {
    let usuariosMaioresIdade: AngularFirestoreCollection<Imovel>;
    usuariosMaioresIdade = this.afs.collection(this.NOME_COLECAO, ref => ref.where('idade', '>', '17'));
    return usuariosMaioresIdade.valueChanges();
  }

}

constructor(){}
