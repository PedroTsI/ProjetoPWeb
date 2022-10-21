export class Imovel {
  id: string;
  endereco: string;
  numero: number;
  telefone: string;
  valor: number;
  imagem: string;
  status: string;

  constructor(id: string, endereco: string, numero: number, telefone: string, valor: number, imagem: string, status: string) {
    this.id = id;
    this.endereco = endereco;
    this.numero = numero;
    this.telefone = telefone;
    this.valor = valor;
    this.imagem = imagem;
    this.status = status;
  }

}
