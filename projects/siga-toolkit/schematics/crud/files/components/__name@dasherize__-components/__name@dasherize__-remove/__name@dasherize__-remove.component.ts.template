import { Component, OnInit, Input, Output, HostListener, EventEmitter } from '@angular/core';

import { <%= classify(name) %>Service } from 'src/app/core/<%= dasherize(name) %>.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-<%= dasherize(name) %>-remove',
  templateUrl: './<%= dasherize(name) %>-remove.component.html',
  styleUrls: ['./<%= dasherize(name) %>-remove.component.scss']
})
export class <%= classify(name) %>RemoveComponent implements OnInit {
  
  @Input() id: number;
  @Output() deleted = new EventEmitter();

  constructor(private service: <%= classify(name) %>Service, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  @HostListener('click', [ '$event.target' ])
  remove() {
    const dialogRef = this.dialog.open(<%= classify(name) %>RemoveDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.confirm();
      }
    });
  }

  confirm(): void {
    this.service.remove(this.id).subscribe(() => {
      this.deleted.emit('deleted');
    });
  }

  decline(): void {
  }

  
}

@Component({
  selector: 'app-<%= dasherize(name) %>-remove-dialog',
  templateUrl: '<%= dasherize(name) %>-remove-dialog.html',
})
export class <%= classify(name) %>RemoveDialogComponent {}