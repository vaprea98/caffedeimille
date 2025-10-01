import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-champagne-glass',
  standalone: true,
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <g transform="translate(1, 1) scale(0.9)">
        <ellipse cx="12" cy="22.6" rx="4.1" ry="1.4" />
        <path d="M12,17.5c2.6,0,4.8-5.1,4.8-11.3c0-2.3-0.3-4.4-0.8-6.2H8c-0.5,1.8-0.8,3.9-0.8,6.2C7.2,12.4,9.4,17.5,12,17.5z" />
        <path d="M10.5,20.4c0.9-0.1,1.8-0.1,3,0v-2.3c-1.4,0.7-2.4,0.2-3,0V20.4z" />
      </g>
    </svg>
  `
})
export class ChampagneGlassIconComponent {
  @Input() size: number = 24;
  @Input() class: string = '';
}