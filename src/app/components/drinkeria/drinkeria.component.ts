import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { ProductItem } from '../../shared/models/product.model';
import { ProductService } from '../../shared/services/product.service';
import { LucideAngularModule } from 'lucide-angular';
import { Router } from '@angular/router';
import { IconsModule } from 'src/app/icons/icon.module';

@Component({
  selector: 'app-drinkeria',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ProductCardComponent, LucideAngularModule, IconsModule],

  templateUrl: './drinkeria.component.html',
  styleUrls: ['./drinkeria.component.css']
})
export class DrinkeriaComponent implements OnInit {
  menuItems: ProductItem[] = [];
  drinkItems: ProductItem[] = [];
  softDrinkItems: ProductItem[] = [];
  wineItems: ProductItem[] = [];
  beerItems: ProductItem[] = [];
  distillatiItems: ProductItem[] = [];
  champagneItems: ProductItem[] = [];
  amariItems: ProductItem[] = [];

  currentCategory: string = 'menu'; // 'menu', 'drink', 'softDrink'
  @ViewChild('sectionTop') sectionTop?: ElementRef<HTMLElement>;
  @ViewChild('pageTop') pageTop?: ElementRef<HTMLElement>;

  
  constructor(private productService: ProductService, private router: Router) {}

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

    // Carica birre
    this.productService.getBeerProducts().subscribe(products => {
      this.beerItems = products;
    })

    // Carica i vini
    this.productService.getWineProducts().subscribe(products => {
      this.wineItems = products;
    });

    // Carica Distillati
    this.productService.getDistillatiProducts().subscribe(products => {
      this.distillatiItems = products;
    })

    // Carica Amari
    this.productService.getAmariProducts().subscribe(products => {
      this.amariItems = products;
    })

    // Carica Champagne
    this.productService.getChampagneProducts().subscribe(products => {
      this.champagneItems = products;
    })

    // Carica tutti i prodotti di drinkeria
    this.productService.getAllDrinkeriaProducts().subscribe(products => {
      this.menuItems = products;
    });
  }
  
  showCategory(category: string): void {
    this.currentCategory = category;

    setTimeout(() => {
      this.sectionTop?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  goBackToMenu() {
    this.currentCategory = 'menu';

    setTimeout(() => {
      this.pageTop?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

}