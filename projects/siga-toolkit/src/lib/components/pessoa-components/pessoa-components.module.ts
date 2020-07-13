

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoaSearchComponent } from './pessoa-search/pessoa-search.component';

@NgModule({
  declarations: [PessoaListComponent, PessoaDetailComponent, PessoaFormComponent, PessoaSearchComponent],
  imports: [
    CommonModule,
    MaterialModule, 
    ReactiveFormsModule, FormsModule
  ]
})
export class PessoaComponentsModule { }