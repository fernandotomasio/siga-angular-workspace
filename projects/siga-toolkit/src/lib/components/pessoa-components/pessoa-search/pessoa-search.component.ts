import { Component, OnInit, Output, EventEmitter, Input, HostListener } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PessoaSearch } from 'src/app/search/pessoa-search';
@Component({
  selector: 'app-pessoa-search',
  templateUrl: './pessoa-search.component.html'
})
export class PessoaSearchComponent implements OnInit {
  search: PessoaSearch = new PessoaSearch
  @Input() advanced: boolean = false;
  form: FormGroup
  @Output() searchChange = new EventEmitter<PessoaSearch>()
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      q: this.fb.control(''),
  
    })
  }

  onSubmit() {
    this.searchChange.emit(this.form.value);
  }

  changeMode(){
    this.advanced = !this.advanced
    this.form.reset()
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.altKey && ! this.advanced
      && (event.key == 'p' || event.key == 'P'))
     this.changeMode()
    if(event.keyCode == 27 && this.advanced)
      this.changeMode()
  }
}