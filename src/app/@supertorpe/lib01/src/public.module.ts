import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PublicComponent },
    ])
  ],
  declarations: [PublicComponent],
  exports: [PublicComponent]
})
export class PublicModule { }
