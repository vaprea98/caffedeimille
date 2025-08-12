import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  template: `
    <app-header [showBackButton]="false" subtitle="Benvenuti al nostro Menù"></app-header>
    
    <main class="max-w-4xl mx-auto px-6 py-12">
      <div class="text-center mb-16">
        <p class="text-lg text-amber-800 leading-relaxed max-w-2xl mx-auto">
          Scopri la nostra selezione di caffè artigianali, cocktail creativi e dolci della tradizione. 
          Ogni prodotto è preparato con ingredienti di qualità per offrirti un'esperienza unica.
        </p>
      </div>

      <div class="space-y-8">
        <h2 class="text-3xl font-bold text-center text-amber-900 mb-12">Scegli una Categoria</h2>
        
        <!-- Caffetteria -->
        <button
          (click)="navigateTo('/caffetteria')"
          class="bg-gradient-to-br from-amber-100 to-yellow-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-amber-200/50 group w-full">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-6">
              <div class="bg-amber-600 p-4 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
               <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0.5">
                <g transform="translate(-0.5, 0) scale(0.09)">
                  <path d="M229.784,199.712c27.269,0,45.568-29.692,45.568-57.419c0-20.117-12.418-22.843-24.562-22.843 c-3.468,0-7.21,0.234-11.167,0.479c-3.195,0.176-6.507,0.332-9.848,0.41l0.039-0.889H1.514c0,42.959,24.132,80.321,59.686,99.49 C24.787,221.333,0,226.043,0,231.445c0,7.865,51.782,14.196,115.659,14.196s115.649-6.331,115.649-14.196 c0-5.432-24.904-10.132-61.454-12.516c10.63-5.725,20.263-13.004,28.529-21.641 C208.026,199.712,219.448,199.712,229.784,199.712z M229.364,128.272c3.683-0.088,7.289-0.244,10.737-0.469 c3.83-0.205,7.464-0.42,10.698-0.42c11.509,0,16.658,2.159,16.658,14.909c0,23.419-15.466,49.515-37.664,49.515 c-9.751,0-18.3-0.205-25.285-1.358C218.559,173.196,227.537,151.731,229.364,128.272z M98.982,97.203 c-0.557-0.547-13.414-13.922,0.156-30.327c16.58-20,0.01-37-0.156-37.166l-3.595,3.595c0.557,0.537,13.414,13.932-0.166,30.327 c-16.58,20.029-0.01,37.039,0.166,37.195L98.982,97.203z M118.737,97.203c-0.557-0.547-13.414-13.922,0.166-30.327 c16.56-20,0-37-0.166-37.166l-3.605,3.595c0.557,0.537,13.414,13.932-0.156,30.327c-16.56,20.039-0.01,37.039,0.166,37.205 L118.737,97.203z M140.251,97.203c-0.557-0.547-13.414-13.922,0.156-30.327c16.57-20,0-37-0.156-37.166l-3.615,3.595 c0.547,0.537,13.424,13.932-0.166,30.327c-16.56,20.039,0,37.039,0.176,37.205L140.251,97.203z"/>
                </g>
              </svg>
              </div>
              <div class="text-left">
                <h3 class="text-2xl font-bold text-amber-900 mb-2">Caffetteria</h3>
                <p class="text-amber-700 text-lg">Caffè artigianali e bevande calde</p>
              </div>
            </div>
            <svg class="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </button>

        <!-- Drinkeria -->
        <button
          (click)="navigateTo('/drinkeria')"
          class="bg-gradient-to-br from-yellow-100 to-amber-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-yellow-200/50 group w-full">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-6">
              <div class="bg-yellow-600 p-4 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 2l-2 9 2 2h8l2-2-2-9H8z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13v8"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21h8"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 6h10"></path>
                </svg>
              </div>
              <div class="text-left">
                <h3 class="text-2xl font-bold text-amber-900 mb-2">Drinkeria</h3>
                <p class="text-amber-700 text-lg">Cocktail, aperitivi e bevande</p>
              </div>
            </div>
            <svg class="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </button>

        <!-- Pasticceria -->
        <button
          (click)="navigateTo('/pasticceria')"
          class="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-amber-100/50 group w-full">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-6">
              <div class="bg-amber-500 p-4 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path>
                </svg>
              </div>
              <div class="text-left">
                <h3 class="text-2xl font-bold text-amber-900 mb-2">Pasticceria</h3>
                <p class="text-amber-700 text-lg">Dolci della tradizione e torte</p>
              </div>
            </div>
            <svg class="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </button>
      </div>
    </main>
  `
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}