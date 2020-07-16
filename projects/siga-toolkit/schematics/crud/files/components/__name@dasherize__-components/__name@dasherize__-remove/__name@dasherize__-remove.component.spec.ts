import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= classify(name) %>RemoveComponent } from './<%= dasherize(name) %>-remove.component';

describe('<%= classify(name) %>RemoveComponent', () => {
  let component: <%= classify(name) %>RemoveComponent;
  let fixture: ComponentFixture<<%= classify(name) %>RemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ <%= classify(name) %>RemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= classify(name) %>RemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
