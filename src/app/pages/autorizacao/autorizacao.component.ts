import { Component, Input, OnInit } from '@angular/core';
import { Dados } from '../../model/dados';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-autorizacao',
  standalone: true,
  imports: [MatButtonModule, MatIcon],
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

  public openPDF(): void {
    let DATA: any = document.getElementById('print-section');

    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;

      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);

      PDF.save('IV Campori UCOB - Autorização - ' + this.dados.nomeDbv + '.pdf');
    });
  }
}
