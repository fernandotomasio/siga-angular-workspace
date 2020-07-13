import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pessoa } from '../../../model/pessoa';
import { PessoaService } from '../../../core/pessoa.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html'
})
export class PessoaFormComponent implements OnInit {
  @Input() id: number
  form: FormGroup
  @Output() saved = new EventEmitter<Pessoa>()
  
  constructor(private service: PessoaService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
    
      nome: this.fb.control('', Validators.required),
    
    })
    
    if (this.id) {
      this.service.find(this.id)
        .subscribe(data =>
          this.form.patchValue({
        
            nome: data.nome,
        
          }))
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.save(this.form.value).subscribe(response => {
        this.saved.emit(response)
      });
    }
  }

}