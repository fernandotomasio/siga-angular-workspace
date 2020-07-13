import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigaToolkitComponent } from './siga-toolkit.component';

describe('SigaToolkitComponent', () => {
  let component: SigaToolkitComponent;
  let fixture: ComponentFixture<SigaToolkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigaToolkitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigaToolkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
