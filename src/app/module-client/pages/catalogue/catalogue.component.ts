import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../../shared/services/produits.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private prodService:ProduitsService) { }

  ngOnInit(): void {
    this.prodService.getProduitCatalogue()
  }

}
