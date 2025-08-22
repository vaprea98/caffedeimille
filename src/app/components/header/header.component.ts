import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() showBackButton = false;
  @Input() subtitle = 'Benvenuti al nostro Menù';

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}