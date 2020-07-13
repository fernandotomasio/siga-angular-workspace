import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pessoa } from '../../../model/pessoa';

@Component({
  selector: 'app-pessoa-edit-page',
  templateUrl: './pessoa-edit-page.component.html'
})
export class PessoaEditPageComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }
  id: number;
  
  ngOnInit() {
    this.id = this.route.snapshot.params['id']
  }

  onSave(event: Pessoa){
    this.router.navigate(['/pessoas', (event? event.id : this.id), 'detail']);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): vid {
    if(event.keyCode == 27)
      this.router.navigate(['/pessoas'])
  }
}
