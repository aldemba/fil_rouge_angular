import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { PageRoutingModule } from './page-routing.module';
import { CardComponent } from '../card/card.component';
import { LayoutModule } from '../layout/layout.module';




@NgModule({
  declarations: [
    CatalogueComponent,
    DetailsComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    LayoutModule
    
  ],
  exports: [
    CatalogueComponent,
    DetailsComponent,
    HomeComponent,
    
  ]
})
export class PagesModule { }
