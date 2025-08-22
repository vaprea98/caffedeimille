import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { ProductItem } from '../../shared/models/product.model';
import { ProductService } from '../../shared/services/product.service';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-drinkeria',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ProductCardComponent, LucideAngularModule],

  templateUrl: './drinkeria.component.html',
  styleUrls: ['./drinkeria.component.css']
})
export class DrinkeriaComponent implements OnInit {
  menuItems: ProductItem[] = [];
  drinkItems: ProductItem[] = [];
  softDrinkItems: ProductItem[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    // Carica i drink alcolici
    this.productService.getDrinkProducts().subscribe(products => {
      this.drinkItems = products;
    });

    // Carica i soft drink
    this.productService.getSoftDrinkProducts().subscribe(products => {
      this.softDrinkItems = products;
    });

    // Carica tutti i prodotti di drinkeria
    this.productService.getAllDrinkeriaProducts().subscribe(products => {
      this.menuItems = products;
    });
  }

}