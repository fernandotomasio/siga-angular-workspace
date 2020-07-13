

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PessoaRoutes } from './pessoa.routing';
import { MaterialModule } from '../material-module';
import { PessoaDetailPageComponent } from './pessoa-detail-page/pessoa-detail-page.component';
import { PessoaIndexPageComponent } from './pessoa-index-page/pessoa-index-page.component';
import { PessoaEditPageComponent } from './pessoa-edit-page/pessoa-edit-page.component';

@NgModule({
  declarations: [PessoaDetailPageComponent, PessoaIndexPageComponent, PessoaEditPageComponent],
  imports: [
    CommonModule,
    MaterialModule, 
    RouterModule.forChild(PessoaRoutes)
  ]
})
export class PessoaPagesModule { }