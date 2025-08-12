import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-gradient-to-r from-amber-900 via-amber-800 to-yellow-700 text-white shadow-2xl">
      <div class="max-w-4xl mx-auto px-6 py-8">
        <div class="flex items-center justify-between">
          <button 
            *ngIf="showBackButton"
            (click)="goHome()"
            class="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors backdrop-blur-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span class="font-medium">Indietro</span>
          </button>
          
          <div class="flex items-center justify-center flex-1">
            <div class="w-28 h-28 md:w-40 md:h-40 overflow-hidden">
              <img 
                src="assets/logo.png" 
                alt="Caffè dei Mille Logo" 
                class="w-full h-full object-contain">
            </div>
          </div>
          
          <div *ngIf="showBackButton" class="w-24"></div>
        </div>
        
        <div class="text-center mt-4">
          <p class="text-xl md:text-2xl text-amber-100 font-light">{{ subtitle }}</p>
          <div class="mt-6 h-1 w-24 bg-gradient-to-r from-transparent via-amber-200 to-transparent mx-auto opacity-60"></div>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  @Input() showBackButton = false;
  @Input() subtitle = 'Benvenuti al nostro Menù';

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}