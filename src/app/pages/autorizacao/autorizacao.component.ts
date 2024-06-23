import { Component, Input, OnInit } from '@angular/core';
import { Dados } from '../../model/dados';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-autorizacao',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './autorizacao.component.html',
  styleUrl: './autorizacao.component.css',

})


export class AutorizacaoComponent implements OnInit {

   formStorage = localStorage;

  dados: Dados = { nomeResp: '', rgResp: '', oeResp: '', cpfResp: '', endereco: '', nomeDbv: '', dtNascDbv: '', rgDbv: '', oeDbv: '', cpfDbv: '' };

  ngOnInit() {
    let form = this.formStorage.getItem('formulario');
    this.dados = form ? JSON.parse(form) : this.dados;
  }

  dataHoje() {
    let data = new Date();
    let dia = data.getDate();
    let mes = (data.getMonth() + 1).toString().padStart(2, '0');
    let ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

}
