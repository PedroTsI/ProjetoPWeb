export abstract class IMensagem {

  abstract imovelcadastrado(mensagem: string): void;

  abstract imovelatualizado(mensagem: string): void;

  abstract logincomsucesso(mensagem: string): void;

  abstract registrocomsucesso(mensagem: string): void;

}
