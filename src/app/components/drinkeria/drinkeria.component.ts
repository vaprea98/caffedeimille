import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

interface MenuItem {
  name: string;
  price: string;
  image: string;
  category: string;
  description?: string;
}

@Component({
  selector: 'app-drinkeria',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  template: `
    <app-header [showBackButton]="true" subtitle="Drinkeria"></app-header>
    
    <main class="max-w-4xl mx-auto px-6 py-12">
      <div class="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 shadow-lg border border-indigo-200/50">
        <div class="flex items-center gap-4 mb-8">
          <div class="bg-indigo-500 p-3 rounded-full shadow-md">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 2l-2 9 2 2h8l2-2-2-9H8z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13v8"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21h8"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 6h10"></path>
            </svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-indigo-900">Drinkeria</h2>
            <p class="text-indigo-700 text-lg mt-1">Cocktail, aperitivi e bevande</p>
          </div>
        </div>
        
        <!-- Sezione Drink -->
        <div class="mb-8">
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-indigo-600 p-2 rounded-full shadow-md">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 2l-2 9 2 2h8l2-2-2-9H8z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13v8"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21h8"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 6h10"></path>
            </svg>
            </div>
            <h3 class="text-2xl font-bold text-indigo-800">Alcolici</h3>
          </div>
          
          <ul class="space-y-4">
            <li *ngFor="let item of getDrinksByCategory('Drink')" 
                class="flex items-center py-4 px-5 bg-white/90 rounded-xl shadow-sm hover:shadow-md hover:bg-white transition-all duration-200 border border-indigo-100/50">
              <img [src]="item.image" [alt]="item.name" class="w-16 h-16 object-cover rounded-lg mr-4" />
             <div class="flex-grow">
                <span class="text-gray-800 font-medium text-lg block">{{ item.name }}</span>
                <span *ngIf="item.description" class="text-gray-600 text-sm">{{ item.description }}</span>
              </div>
              <span class="text-indigo-700 font-bold text-xl">{{ item.price }}</span>
            </li>
          </ul>
        </div>
        
        <!-- Sezione Soft Drink -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-purple-500 p-2 rounded-full shadow-md">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 2l-2 9 2 2h8l2-2-2-9H8z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13v8"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21h8"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 6h10"></path>
            </svg>
            </div>
            <h3 class="text-2xl font-bold text-purple-800">Soft Drink</h3>
          </div>
          
          <ul class="space-y-4">
            <li *ngFor="let item of getDrinksByCategory('Soft Drink')" 
                class="flex items-center py-4 px-5 bg-white/90 rounded-xl shadow-sm hover:shadow-md hover:bg-white transition-all duration-200 border border-purple-100/50">
              <img [src]="item.image" [alt]="item.name" class="w-16 h-16 object-cover rounded-lg mr-4" />
              <div class="flex-grow">
                <span class="text-gray-800 font-medium text-lg block">{{ item.name }}</span>
                <span *ngIf="item.description" class="text-gray-600 text-sm">{{ item.description }}</span>
              </div>
              <span class="text-purple-700 font-bold text-xl">{{ item.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  `
})
export class DrinkeriaComponent {
  menuItems: MenuItem[] = [
    // Drink alcolici
    { name: 'Aperol Spritz', price: '€5.00', image: 'assets/menu-photos/spritz_aperol.png', category: 'Drink' },
    { name: 'Negroni', price: '€6.00', image: 'assets/menu-photos/negroni.png', category: 'Drink' },
    { name: 'Mojito', price: '€5.50', image: 'assets/menu-photos/mojito.png', category: 'Drink' },
    { name: 'Gin Tonic', price: '€5.00', image: 'assets/menu-photos/gin_tonic.png', category: 'Drink' },
    { name: 'Gin Lemon', price: '€5.00', image: 'assets/menu-photos/gin_lemon.png', category: 'Drink' },
    
    // Soft Drink
    { name: 'Coca Cola', price: '€2.50', image: 'assets/menu-photos/cocacola.png', category: 'Soft Drink' },
    { name: 'Coca Cola Zero', price: '€2.50', image: 'assets/menu-photos/cocacola_zero.png', category: 'Soft Drink' },
    { name: 'Estathè Limone', price: '€3.00', image: 'assets/menu-photos/the_limone.png', category: 'Soft Drink' },
    { name: 'Estathè Pesca', price: '€3.00', image: 'assets/menu-photos/the_pesca.png', category: 'Soft Drink' },
    { name: 'Fanta', price: '€2.50', image: 'assets/menu-photos/fanta.png', category: 'Soft Drink' },
    { name: 'Sprite', price: '€2.50', image: 'assets/menu-photos/sprite.png', category: 'Soft Drink' },
    { name: 'Red Bull', price: '€2.50', image: 'assets/menu-photos/red_bull.png', category: 'Soft Drink' },
    { name: 'Acqua', price: '€1.00', image: 'assets/menu-photos/acqua.png', category: 'Soft Drink', description: 'Naturale/Frizzante' },
    { name: 'Succo di Frutta', price: '€2.50', image: 'assets/menu-photos/succo_frutta.png', category: 'Soft Drink', description: 'Pesca, Mango, Ace, Pera' },
    ];
  
  // Metodo per filtrare i drink per categoria
  getDrinksByCategory(category: string): MenuItem[] {
    return this.menuItems.filter(item => item.category === category);
  }
}