import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {IMensagem} from './IMensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemService extends IMensagem {

  constructor(private snackBar: MatSnackBar) {
    super();
  }

  imovelcadastrado(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['imovelcadastrado'])
  }

  imovelatualizado(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['imovelatualizado'])
  }

  logincomsucesso(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['logincomsucesso'])
  }

  registrocomsucesso(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['registrocomsucesso'])
  }

  private abrirSnackBar(mensagem: string, extraClasses: string[]): void {
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = extraClasses;
    this.snackBar.open(mensagem, 'X', config);
  }
}
