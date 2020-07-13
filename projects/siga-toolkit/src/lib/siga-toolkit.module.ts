import { NgModule } from '@angular/core';
import { SigaToolkitComponent } from './siga-toolkit.component';



@NgModule({
  declarations: [SigaToolkitComponent],
  imports: [
    FlexLayout
  ],
  exports: [SigaToolkitComponent]
})
export class SigaToolkitModule { }
