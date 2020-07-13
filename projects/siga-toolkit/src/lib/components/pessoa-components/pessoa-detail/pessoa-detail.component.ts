import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from '../../../model/pessoa';
import { PessoaService } from '../../../core/pessoa.service';

@Component({
  selector: 'app-pessoa-detail',
  templateUrl: './pessoa-detail.component.html'
})
export class PessoaDetailComponent implements OnInit {
  @Input() id: number
  data: Pessoa

  constructor(private service: PessoaService) { }

  ngOnInit() {
    this.service.find(this.id)
    .subscribe(data => this.data = data)
  }

}
