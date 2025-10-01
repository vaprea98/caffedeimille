import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { PopupComponent } from './components/popup/popup.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, PopupComponent, WhatsappButtonComponent],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <router-outlet></router-outlet>
      <app-footer></app-footer>
      <app-popup></app-popup>
      <app-whatsapp-button></app-whatsapp-button>
    </div>
  `
})
export class AppComponent {
  title = 'caffe-dei-mille-menu';
}