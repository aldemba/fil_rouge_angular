import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produits } from '../../shared/models/produits';
import { ProduitsService } from '../../shared/services/produits.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
produits$:Observable<Produits[]>|null=null

  constructor(private service:ProduitsService) {
   }

  ngOnInit(): void {
    this.produits$=this.service.All()
  }

}
