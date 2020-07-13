import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PessoaDetailPageComponent } from './pessoa-detail-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PessoaDetailComponent } from '../../pessoa-detail/pessoa-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from '../../../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';


describe('PessoaDetailPageComponent', () => {
  let component: PessoaDetailPageComponent;
  let fixture: ComponentFixture<PessoaDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, DemoMaterialModule, 
        FlexLayoutModule, HttpClientModule ],
      declarations: [PessoaDetailPageComponent, PessoaDetailComponent]
    })
    fixture = TestBed.createComponent(PessoaDetailPageComponent)
    component = fixture.componentInstance
  });

  it('should contains pessoa detail page title', () => {
    fixture.detectChanges();
    const html: HTMLElement = fixture.nativeElement;
    
    expect(html.textContent).toContain('Detalhes de Pessoa')
   });


  it('should contains add link to delete pessoa', () => {
   fixture.detectChanges();
   const html: HTMLElement = fixture.nativeElement;
   expect(html.querySelector('#link-remove').textContent).toContain('Remover')
  });
  it('should contains add link to edit pessoa', () => {
    fixture.detectChanges();
    const html: HTMLElement = fixture.nativeElement;
    expect(html.querySelector('#link-edit').textContent).toContain('Editar')
   });
   it('should contains add link to close page', () => {
    fixture.detectChanges();
    const html: HTMLElement = fixture.nativeElement;
    expect(html.querySelector('#link-close').textContent).toContain('Fechar')
   });
});