// src/app/icons/shot-glass-icon.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shot-glass-icon',
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
      <g transform="translate(2.4, 2) scale(0.9)"> <!-- Traslazione e leggera riduzione -->
        <path
          d="M16.32 16.71c-0.6 1.89-2.79 3.09-5.17 3.09s-4.57-1.2-5.17-3.09C5.68 15.09 4.77 11.48 4.77 11.48l0.67 7.78c0.07 0.77 0.75 1.4 1.53 1.4h7.75c0.77 0 1.46-0.63 1.53-1.4l0.67-7.78C17.42 11.48 16.51 15.09 16.32 16.71z"
        />
        <path
          d="M4.09 1.78c0 0 2.4 10.83 3.56 14.34c0.38 1.16 1.89 1.91 3.49 1.91s3.11-0.75 3.49-1.91c1.16-3.51 3.56-14.34 3.56-14.34l0.03-0.38C18.26 0.63 17.75 0 17.01 0H5.34c-0.77 0-1.35 0.63-1.29 1.4L4.09 1.78z"
        />
      </g>
    </svg>
  `
})
export class ShotGlassIconComponent {
  @Input() size: number = 38;
  @Input() class: string = '';
}