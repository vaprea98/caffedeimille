import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
  `
})
export class AppComponent {
  title = 'pause-bar-menu';
}