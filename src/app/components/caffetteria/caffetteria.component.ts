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
  selector: 'app-caffetteria',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  template: `
    <app-header [showBackButton]="true" subtitle="Caffetteria"></app-header>
    
    <main class="max-w-4xl mx-auto px-6 py-12">
      <div class="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-8 shadow-lg border border-amber-200/50">
        <div class="flex items-center gap-4 mb-8">
          <div class="bg-amber-600 p-3 rounded-full shadow-md">
           <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0.5">
                <g transform="translate(-0.5, 0) scale(0.09)">
                  <path d="M229.784,199.712c27.269,0,45.568-29.692,45.568-57.419c0-20.117-12.418-22.843-24.562-22.843 c-3.468,0-7.21,0.234-11.167,0.479c-3.195,0.176-6.507,0.332-9.848,0.41l0.039-0.889H1.514c0,42.959,24.132,80.321,59.686,99.49 C24.787,221.333,0,226.043,0,231.445c0,7.865,51.782,14.196,115.659,14.196s115.649-6.331,115.649-14.196 c0-5.432-24.904-10.132-61.454-12.516c10.63-5.725,20.263-13.004,28.529-21.641 C208.026,199.712,219.448,199.712,229.784,199.712z M229.364,128.272c3.683-0.088,7.289-0.244,10.737-0.469 c3.83-0.205,7.464-0.42,10.698-0.42c11.509,0,16.658,2.159,16.658,14.909c0,23.419-15.466,49.515-37.664,49.515 c-9.751,0-18.3-0.205-25.285-1.358C218.559,173.196,227.537,151.731,229.364,128.272z M98.982,97.203 c-0.557-0.547-13.414-13.922,0.156-30.327c16.58-20,0.01-37-0.156-37.166l-3.595,3.595c0.557,0.537,13.414,13.932-0.166,30.327 c-16.58,20.029-0.01,37.039,0.166,37.195L98.982,97.203z M118.737,97.203c-0.557-0.547-13.414-13.922,0.166-30.327 c16.56-20,0-37-0.166-37.166l-3.605,3.595c0.557,0.537,13.414,13.932-0.156,30.327c-16.56,20.039-0.01,37.039,0.166,37.205 L118.737,97.203z M140.251,97.203c-0.557-0.547-13.414-13.922,0.156-30.327c16.57-20,0-37-0.156-37.166l-3.615,3.595 c0.547,0.537,13.424,13.932-0.166,30.327c-16.56,20.039,0,37.039,0.176,37.205L140.251,97.203z"/>
                </g>
              </svg>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-amber-900">Caffetteria</h2>
            <p class="text-amber-900 text-lg mt-1">Caffè artigianali e bevande calde preparate con miscele selezionate dai migliori produttori</p>
          </div>
        </div>
        
        <ul class="space-y-4">
          <li *ngFor="let item of menuItems" 
              class="flex items-center py-4 px-5 bg-white/90 rounded-xl shadow-sm hover:shadow-md hover:bg-white transition-all duration-200 border border-amber-100/50">
            <img [src]="item.image" [alt]="item.name" class="w-16 h-16 object-cover rounded-lg mr-4" />
            <div class="flex-grow">
                <span class="text-gray-800 font-medium text-lg block">{{ item.name }}</span>
                <span *ngIf="item.description" class="text-gray-600 text-sm">{{ item.description }}</span>
              </div>
            <span class="text-amber-700 font-bold text-xl">{{ item.price }}</span>
          </li>
        </ul>
      </div>
    </main>
  `
})
export class CaffetteriaComponent {
  menuItems: MenuItem[] = [
    { name: 'Espresso', price: '€1.00', image: 'assets/menu-photos/espresso.png' },
    { name: 'Cappuccino', price: '€2.00', image: 'assets/menu-photos/cappuccino.png' },
    { name: 'Macchiato', price: '€1.00', image: 'assets/menu-photos/macchiatto.png' },
    { name: 'Caffè Corretto', price: '€2.50', image: 'assets/menu-photos/caffe_corretto.png' },
    { name: 'Crema Caffè', price: '€2.00', image: 'assets/menu-photos/crema_caffe.png' },
    { name: 'Cioccolata Calda', price: '€2.50', image: 'assets/menu-photos/cioccolata_calda.png' }
  ];
}