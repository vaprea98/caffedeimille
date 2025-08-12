import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

interface MenuItem {
  name: string;
  price: string;
  image: string;
  description?: string;
}

@Component({
  selector: 'app-pasticceria',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  template: `
    <app-header [showBackButton]="true" subtitle="Pasticceria"></app-header>
    
    <main class="max-w-4xl mx-auto px-6 py-12">
      <div class="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 shadow-lg border border-purple-200/50">
        <div class="flex items-center gap-4 mb-8">
          <div class="bg-purple-500 p-3 rounded-full shadow-md">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path>
            </svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-purple-900">Pasticceria</h2>
            <p class="text-purple-700 text-lg mt-1">Dolci della tradizione e torte artigianali preparate con ingredienti freschi</p>
          </div>
        </div>
        
        <ul class="space-y-4">
          <li *ngFor="let item of menuItems" 
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
    </main>
  `
})
export class PasticceriaComponent {
  menuItems: MenuItem[] = [
    { name: 'Cornetto', price: '€1.00', image: 'assets/menu-photos/cornetto.png' },
    { name: 'Cornetto farcito', price: '€1.00', image: 'assets/menu-photos/cornetto_farcito.png', description: 'Nutella, Cioccolato Bianco, Crema, Bueno, Pistacchio' },
    { name: 'Tiramisù', price: '€3.50', image: 'assets/menu-photos/tiramisu.png' },
    { name: 'Cheesecake', price: '€4.00', image: 'assets/menu-photos/cheesecake.png', description: 'Nutella, Cioccolato Bianco, Kinder, Frutti di bosco' },
  ];
}