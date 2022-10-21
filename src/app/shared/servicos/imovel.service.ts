import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Imovel} from '../modelo/imovel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  URL_IMOVEIS = 'http://localhost:3000/IMOVEIS';

  constructor(private clienteHttp: HttpClient) { }

  listar(): Observable<Imovel[]> {
    return this.clienteHttp.get<Imovel[]>(this.URL_IMOVEIS);
  }

  inserir(novoImovel: Imovel): Observable<Imovel> {
    return this.clienteHttp.post<Imovel>(
      this.URL_IMOVEIS, novoImovel);
  }

  // DELETE /Imovels/3
  apagar(idParaRemocao: string): Observable<object> {
    return this.clienteHttp.delete(`${this.URL_IMOVEIS}/${idParaRemocao}`);
  }

  pesquisarPorId(id: string): Observable<Imovel> {
    return this.clienteHttp.get<Imovel>(`${this.URL_IMOVEIS}/${id}`);
  }

  atualizar(Imovel: Imovel): Observable<Imovel> {
    return this.clienteHttp
      .put<Imovel>(`${this.URL_IMOVEIS}/${Imovel.id}`, Imovel);
  }
  atualizarVenda(Imovel: Imovel, status: string): Observable<Imovel>{
    return this.clienteHttp.patch<Imovel>(`${this.URL_IMOVEIS}/${Imovel.id}`, {status})
  }




}
