import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatComponentModule } from './component/mat-component/mat-component.module';

@NgModule({
  imports: [
    RouterModule.forChild([])
  ],
  declarations: [
  ],
  exports: [
    MatComponentModule
  ]
})
export class SharedModule { }
