export class Imovel {
  id?: string;
  endereco?: string;
  numero?: number;
  telefone?: string;
  valor?: number;
  imagem?: string;
  status?: string;

  constructor(id?: string, imovel : Imovel={}) {
    this.id = id;
    this.endereco = imovel.endereco;
    this.numero = imovel.numero;
    this.telefone = imovel.telefone;
    this.valor = imovel.valor;
    this.imagem = imovel.imagem;
    this.status = imovel.status;
  }

}
