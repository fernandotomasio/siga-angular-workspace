import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameSearchComponent } from './name-search.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('NameSearchComponent', () => {
  let component: NameSearchComponent;
  let fixture: ComponentFixture<NameSearchComponent>;

 
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NameSearchComponent ],
      imports: [ ReactiveFormsModule ]
    })
    fixture = TestBed.createComponent(NameSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create name search', () => {
    expect(component).toBeTruthy();
  });

  it('should raise change event', () => {
    let changeEvent = null
    let expected = { 
      fullName: 'fullname search',
      shortName: 'shortname search' 
    }
    component.change.subscribe(event => changeEvent = event)
    component.ngOnInit()
    component.form.setValue(expected)
    
    component.onSubmit()

    expect(changeEvent.fullName).toBe(expected.fullName)
    expect(changeEvent.shortName).toBe(expected.shortName)
  });

});