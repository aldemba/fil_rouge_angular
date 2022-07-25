import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    NotFoundComponent,


  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class ModuleClientModule { }
