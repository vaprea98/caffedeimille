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
  selector: 'app-pasticceria',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ProductCardComponent, LucideAngularModule, IconsModule],

  templateUrl: './pasticceria.component.html',
  styleUrls: ['./pasticceria.component.css']
})
export class PasticceriaComponent implements OnInit {
  menuItems: ProductItem[] = [];
  traditionalItems: ProductItem[] = [];
  cornettiItems: ProductItem[] = [];
  dolciItems: ProductItem[] = [];

  currentCategory: string = 'menu'; // 'menu', 'drink', 'softDrink'
  @ViewChild('sectionTop') sectionTop?: ElementRef<HTMLElement>;
  @ViewChild('pageTop') pageTop?: ElementRef<HTMLElement>;

  
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    // Carica i drink alcolici
    this.productService.getTraditionalProducts().subscribe(products => {
      this.traditionalItems = products;
    });

    // Carica i soft drink
    this.productService.getCornettiProducts().subscribe(products => {
      this.cornettiItems = products;
    });

    // Carica birre
    this.productService.getDolciProducts().subscribe(products => {
      this.dolciItems = products;
    })

     this.productService.getAllPasticceriaProducts().subscribe(products => {
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