import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-detail-page',
  templateUrl: './pessoa-detail-page.component.html'
})
export class PessoaDetailPageComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }
  id: number;
  
  ngOnInit() {
    this.id = this.route.snapshot.params['id']
  }
  
  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if(event.keyCode == 27)
      this.router.navigate(['/pessoas'])
  }
}