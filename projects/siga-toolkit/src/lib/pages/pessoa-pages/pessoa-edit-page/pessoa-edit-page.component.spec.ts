import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PessoaEditPageComponent } from './pessoa-edit-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PessoaFormComponent } from '../../pessoa-form/pessoa-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from '../../../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('PessoaEditPageComponent', () => {
  let component: PessoaEditPageComponent;
  let fixture: ComponentFixture<PessoaEditPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, DemoMaterialModule, 
        FlexLayoutModule, 
        ReactiveFormsModule, HttpClientModule ],
      declarations: [PessoaEditPageComponent, PessoaFormComponent]
    })
    fixture = TestBed.createComponent(PessoaEditPageComponent)
    component = fixture.componentInstance
  });

  xit('should contains pessoa edit page title', () => {
    fixture.detectChanges();
    const html: HTMLElement = fixture.nativeElement;
    expect(html.textContent).toContain('Editar Organização')
   });


});
