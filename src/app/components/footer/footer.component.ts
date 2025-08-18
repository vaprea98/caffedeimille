import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white mt-20">
      <div class="max-w-4xl mx-auto px-6 py-12">
        <div class="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-white mb-4">Contatti</h3>
            <div class="flex items-center justify-center md:justify-start gap-3">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span class="text-white">Via Dei Mille 33, Torre Annunziata (NA)</span>
            </div>
            <div class="flex items-center justify-center md:justify-start gap-3">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span class="text-white">+39 081 359 9118</span>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-xl font-bold text-white mb-4">Orari</h3>
            <div class="flex items-center justify-center md:justify-start gap-3">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12,6 12,12 16,14"></polyline>
              </svg>
              <div class="text-white">
                <div>Lun-Sab: 7:00 - 22:00</div>
                <div>Domenica: 7:00 - 14:00</div>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-xl font-bold text-white mb-4">Seguici</h3>
            <div class="flex justify-center md:justify-start gap-4">
            <a href="https://www.instagram.com/caffedeimille_ta?igsh=MXN1Mm82MWUxajlsNg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <div class="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              </a>
              <a href="https://www.facebook.com/people/Caff%C3%A8-dei-Mille/61578932495059" target="_blank" rel="noopener noreferrer">
              <div class="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-white-700/50 mt-8 pt-8 text-center">
          <p class="text-white font-light">
            © 2025 Caffè dei Mille. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}