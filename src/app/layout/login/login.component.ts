import { Component, OnInit } from '@angular/core';
import {MensagemService} from "../../shared/servicos/mensagem.service";
import {IMensagem} from "../../shared/servicos/IMensagem";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private MensagemService: MensagemService) { }

  ngOnInit(): void {
  }

  registrarUsuario(){
    usuarioRegistrado => this.MensagemService.registrocomsucesso('Usuario registrado com sucesso')
  }

  logarUsuario(){
    usuarioLogado => this.MensagemService.logincomsucesso('Usuario logado com sucesso')
  }
}
