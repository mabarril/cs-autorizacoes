import { Routes } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { AutorizacaoComponent } from './pages/autorizacao/autorizacao.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'autorizacao', component: AutorizacaoComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
