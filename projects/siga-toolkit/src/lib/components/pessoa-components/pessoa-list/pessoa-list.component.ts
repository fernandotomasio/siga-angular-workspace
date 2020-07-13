import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PessoaSearch } from '../../../search/pessoa-search';
import { Pessoa } from '../../../model/pessoa';
import { PessoaService } from '../../../core/pessoa.service';
import { PageEvent, Sort } from '@angular/material';
import { environment } from 'src/environments/environment';

@Component({
  selector: '[app-pessoa-list]',
  templateUrl: './pessoa-list.component.html'
})
export class PessoaListComponent implements OnInit {
  @Output() action = new EventEmitter<any>()
  paginateOptions = []

  totalCount: number
  filteredCount: number
  columnsToDisplay = ['nome', 'acoes']
  paginate = true;

  search: PessoaSearch = new PessoaSearch()
  dataList: Pessoa[]

  constructor(private service: PessoaService) {
  }

  ngOnInit() {
    this.search.size = environment.paginateDefaultSize
    this.search.paginate = this.paginate
    this.paginateOptions = environment.paginateOptions
    this.refresh();
  }

  refresh() {
    this.service.findAll(this.search).subscribe(response => {
      this.dataList = response.data
      this.totalCount = response.totalCount
      this.filteredCount = response.filteredCount
    })
  }

  onPageChange(event: PageEvent) {
    this.search.size = event.pageSize
    this.search.page = event.pageIndex
    this.refresh()
  }

  onSortChange(event: Sort) {
   
    switch(event.direction){
      case 'asc':
        this.search.orderBy = [event.active]
      break
      case 'desc':
        this.search.orderBy = ['-' + event.active]
      break
      default:
        this.search.orderBy = []
    }
   
    this.refresh()
  }

  raiseAction(action: string, id: number) {
    this.action.emit({ 
      action: action, 
      id: id 
    })
  }

  onSearchChange(event: PessoaSearch){
    this.search = Object.assign(this.search, event)
    console.log(this.search)
    this.refresh()
  }
}