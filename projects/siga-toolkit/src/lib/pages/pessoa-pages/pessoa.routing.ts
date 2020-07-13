import { Routes } from '@angular/router';
import { PessoaIndexPageComponent } from './pessoa-pages/pessoa-index-page/pessoa-index-page.component';
import { PessoaDetailPageComponent } from './pessoa-pages/pessoa-detail-page/pessoa-detail-page.component';
import { PessoaEditPageComponent } from './pessoa-pages/pessoa-edit-page/pessoa-edit-page.component';

export const PessoaRoutes: Routes = [
  {path: '', component: PessoaIndexPageComponent},
  {path: ':id/detail', component: PessoaDetailPageComponent},
  {path: ':id/edit', component: PessoaEditPageComponent},
  {path: 'edit', component: PessoaEditPageComponent}
];