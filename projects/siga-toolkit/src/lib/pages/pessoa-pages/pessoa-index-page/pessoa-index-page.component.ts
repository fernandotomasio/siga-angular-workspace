import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-index-page',
  templateUrl: './pessoa-index-page.component.html'
})
export class PessoaIndexPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  onAction(event: any) {
    let id: number = event.id
    let action: string = event.action

    if (action == 'detail') {
      this.router.navigate(['pessoas', event.id, 'detail']);
    }
    if (action == 'edit') {
      this.router.navigate(['pessoas', event.id, 'edit']);
    }

  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): vid {
    if (event.altKey
      && (event.key == 'n' || event.key == 'N'))
      this.router.navigate(['/pessoas/edit'])
  }


}
