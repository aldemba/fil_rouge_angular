import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClientRoutingModule } from './client-routing.module';
import { LayoutModule } from './layout/layout.module';



@NgModule({
  declarations: [
    NotFoundComponent,


  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LayoutModule
  ],
  exports: [
  ]
})
export class ModuleClientModule { }
