import { Component, Input } from '@angular/core';
import { Dados } from '../../model/dados';

@Component({
  selector: 'app-autorizacao',
  standalone: true,
  imports: [],
  templateUrl: './autorizacao.component.html',
  styleUrl: './autorizacao.component.css'
})
export class AutorizacaoComponent {

  @Input() dados: Dados = { nomeResp: '', rgResp: '', oeResp: '', cpfResp: '', endereco: '', nomeDbv: '', dtNascDbv: '', rgDbv: '', oeDbv: '', cpfDbv: '' };  

  dataHoje() {
    let data = new Date();
    let dia = data.getDate();
    let mes = (data.getMonth() + 1).toString().padStart(2, '0');
    let ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }
}
