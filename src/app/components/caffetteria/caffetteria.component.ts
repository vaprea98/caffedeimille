import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { ProductItem } from '../../shared/models/product.model';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-caffetteria',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ProductCardComponent],
  templateUrl: './caffetteria.component.html',
  styleUrls: ['./caffetteria.component.css']
})
export class CaffetteriaComponent implements OnInit {
  menuItems: ProductItem[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getCaffetteriaProducts().subscribe(products => {
      this.menuItems = products;
    });
  }
}