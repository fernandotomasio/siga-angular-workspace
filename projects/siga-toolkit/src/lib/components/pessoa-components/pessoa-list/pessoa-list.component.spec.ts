import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaListComponent } from './pessoa-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PessoaSearchComponent } from '../pessoa-search/pessoa-search.component';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { PessoaService } from '../../core/pessoa.service';
import { DemoMaterialModule } from '../../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('PessoaListComponent', () => {
  let component: PessoaListComponent;
  let fixture: ComponentFixture<PessoaListComponent>;
  let spyService: jasmine.SpyObj<PessoaService>


  beforeEach(() => {
    const spy = jasmine.createSpyObj('PessoaService', ['findAll'])

    TestBed.configureTestingModule({
      imports: [HttpClientModule, DemoMaterialModule, 
        FlexLayoutModule, ReactiveFormsModule],
      declarations: [PessoaListComponent, PessoaSearchComponent],
      providers: [{ provide: PessoaService, useValue: spy }]
    })

    fixture = TestBed.createComponent(PessoaListComponent);
    component = fixture.componentInstance;
  });

  it('should create pessoa list', () => {
    expect(component).toBeTruthy();
  });

  it('should render pessoa data list', () => {
    let fakeData = {
      data: [
        {
          id: 1, fullName: "fake fullname 1", shortName: "fake shortname 1"
        },
        {
          id: 2, fullName: "fake fullname 2", shortName: "fake shortname 2"
        },
        {
          id: 3, fullName: "fake fullname 3", shortName: "fake shortname 3"
        },
        {
          id: 4, fullName: "fake fullname 4", shortName: "fake shortname 4"
        },
        {
          id: 5, fullName: "fake fullname 5", shortName: "fake shortname 5"
        }
      ]
    }
    spyService = TestBed.get(PessoaService)
    spyService.findAll.and.returnValue(of(fakeData));

    fixture.autoDetectChanges();

    const html: HTMLElement = fixture.nativeElement;
    expect(html.textContent).toContain("fake fullname 4")

  });


  it('should raise detail event', () => {
    let actionEvent = null
    component.action.subscribe(event => actionEvent = event)

    let fakeData = {
      data: [
        {
          id: 1, fullName: "fake fullname 1", shortName: "fake shortname 1"
        }
      ]
    }
    spyService = TestBed.get(PessoaService)
    spyService.findAll.and.returnValue(of(fakeData));

    fixture.autoDetectChanges();
    let button = fixture.debugElement.query(By.css('.btn-detail'))
    button.triggerEventHandler('click', null)
  
    expect(actionEvent.action).toBe('detail')
  });

  it('should raise edit event', () => {
    let actionEvent = null
    component.action.subscribe(event => actionEvent = event)

    let fakeData = {
      data: [
        {
          id: 1, fullName: "fake fullname 1", shortName: "fake shortname 1"
        }
      ]
    }
    spyService = TestBed.get(PessoaService)
    spyService.findAll.and.returnValue(of(fakeData));

    fixture.autoDetectChanges();
    let button = fixture.debugElement.query(By.css('.btn-edit'))
    button.triggerEventHandler('click', null)
  
    expect(actionEvent.action).toBe('edit')
  });
});