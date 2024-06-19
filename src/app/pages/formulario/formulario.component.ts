import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { NgxPrintModule } from 'ngx-print';
import { RouterLink } from '@angular/router';

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
    NgxPrintModule,
    MatIcon,
    RouterLink
  ]
})
export class FormularioComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    nomeResp: [null, Validators.required],
    rgResp: [null, Validators.required],
    oeResp: [null, Validators.required],
    cpfResp: [null, Validators.required],
    endereco: [null, Validators.required],
    nomeDbv: [null, Validators.required],
    dtNascDbv: [null, Validators.required],
    rgDbv: [null, Validators.required],
    oeDbv: [null, Validators.required],
    cpfDbv: [null, Validators.required],
  });

  dataHoje() {
    let data = new Date();
    let dia = data.getDate();
    let mes = (data.getMonth() + 1).toString().padStart(2, '0');
    let ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
