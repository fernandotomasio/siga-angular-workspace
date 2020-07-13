import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaDetailComponent } from './pessoa-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { PessoaService } from '../../core/pessoa.service';
import { Pessoa } from '../../model/pessoa';

describe('PessoaDetailComponent', () => {
  let component: PessoaDetailComponent;
  let fixture: ComponentFixture<PessoaDetailComponent>;
  let spyService: jasmine.SpyObj<PessoaService>


  beforeEach(() => {
    const spy = jasmine.createSpyObj('PessoaService', ['find'])
    
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ PessoaDetailComponent ],
      providers: [ { provide: PessoaService, useValue: spy}]
    })

    fixture = TestBed.createComponent(PessoaDetailComponent);
    component = fixture.componentInstance;

  });

  it('should create pessoa detail', () => {
    expect(component).toBeTruthy();
  });

  it('should render pessoa detail', () => {
    const expectedData: Pessoa = new Pessoa();
    expectedData.fullName = "fake fullname"
    expectedData.shortName = "fake shortname"
    expectedData.id = 1435

    spyService = TestBed.get(PessoaService)
    spyService.find.and.returnValue(of(expectedData))

    fixture.detectChanges()

    const html: HTMLElement = fixture.nativeElement
    expect(html.textContent).toContain(expectedData.fullName)
    expect(html.textContent).toContain(expectedData.shortName)
    
    expect(component).toBeTruthy();
  });

});
