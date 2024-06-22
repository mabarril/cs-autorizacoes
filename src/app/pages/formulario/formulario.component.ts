import { Component, Injectable, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { Dados } from '../../model/dados';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIcon,
    RouterLink,
    HeaderComponent,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [provideNgxMask()]
})



export class FormularioComponent {

  formStorage = localStorage;

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    nomeResp: ['', [Validators.required]],
    rgResp: ['', Validators.required],
    oeResp: ['', Validators.required],
    cpfResp: ['', Validators.required],
    endereco: ['', Validators.required],
    nomeDbv: ['', Validators.required],
    dtNascDbv: ['', Validators.required],
    rgDbv: ['', Validators.required],
    oeDbv: ['', Validators.required],
    cpfDbv: ['', Validators.required],
  });

  dataHoje() {
    let data = new Date();
    let dia = data.getDate();
    let mes = (data.getMonth() + 1).toString().padStart(2, '0');
    let ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  submit() {
    let dados: Dados = {
      nomeResp: this.addressForm.get('nomeResp')?.value?.toUpperCase() ?? '',
      rgResp: this.addressForm.get('rgResp')?.value?.toUpperCase() ?? '',
      oeResp: this.addressForm.get('oeResp')?.value?.toUpperCase() ?? '',
      cpfResp: this.addressForm.get('cpfResp')?.value?.toUpperCase() ?? '',
      endereco: this.addressForm.get('endereco')?.value?.toUpperCase() ?? '',
      nomeDbv: this.addressForm.get('nomeDbv')?.value?.toUpperCase() ?? '',
      dtNascDbv: this.addressForm.get('dtNascDbv')?.value?.toUpperCase() ?? '',
      rgDbv: this.addressForm.get('rgDbv')?.value?.toUpperCase() ?? '',
      oeDbv: this.addressForm.get('oeDbv')?.value?.toUpperCase() ?? '',
      cpfDbv: this.addressForm.get('cpfDbv')?.value?.toUpperCase() ?? '',
    };

      this.formStorage.setItem('formulario', JSON.stringify(dados));
  }

}
