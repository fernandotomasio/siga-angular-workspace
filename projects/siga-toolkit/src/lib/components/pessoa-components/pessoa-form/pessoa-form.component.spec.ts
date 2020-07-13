import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaFormComponent } from './pessoa-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { PessoaService } from '../../core/pessoa.service';

describe('PessoaFormComponent', () => {
  let component: PessoaFormComponent;
  let fixture: ComponentFixture<PessoaFormComponent>;
  let spyService: jasmine.SpyObj<PessoaService>

  beforeEach(() => {
    const spy = jasmine.createSpyObj('PessoaService', ['find', 'save'])

    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
      declarations: [PessoaFormComponent],
      providers: [{ provide: PessoaService, useValue: spy }]
    })

    fixture = TestBed.createComponent(PessoaFormComponent);
    component = fixture.componentInstance;

  });

  it('should create pessoa form', () => {
    expect(component).toBeTruthy();
  });

  it('should create pessoa form fields', () => {
    component.ngOnInit()

    expect(component.form.contains('id')).toBeTruthy()
    expect(component.form.contains('fullName')).toBeTruthy()
    expect(component.form.contains('shortName')).toBeTruthy()

  });

  it('should have fullname required in pessoa form', () => {
    component.ngOnInit()
    let fullName = component.form.get('fullName')
    fullName.setValue('')

    expect(fullName.valid).toBeFalsy()
  });


  it('should prepare pessoa form to create', () => {
    spyService = TestBed.get(PessoaService)
    spyService.save.and.returnValue(of({ id: 12 }))

    component.ngOnInit()

    expect(spyService.find.calls.count()).toBe(0, '0 call to find')
  });

  it('should prepare pessoa form to update', () => {
    spyService = TestBed.get(PessoaService)
    spyService.save.and.returnValue(of(null))
    spyService.find.and.returnValue(of({
      id: 12,
      fullName: 'Fake fullname',
      shortName: ''
    }))
    component.id = 12

    component.ngOnInit()

    expect(spyService.find.calls.count()).toBe(1, '1 call to find')
  });

  it('should raise saved event', () => {
    let savedEvent = null
    let expected = { id: 12 }
    spyService = TestBed.get(PessoaService)

    spyService.save.and.returnValue(of(expected))

    component.ngOnInit()
    component.saved.subscribe(event => savedEvent = event)
    component.form.setValue({
      id: '',
      fullName: 'Fake fullname',
      shortName: ''
    })

    component.onSubmit()



    expect(savedEvent).toBe(expected)
  });

});
