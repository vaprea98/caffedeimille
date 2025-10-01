import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  showPopup = true;

  constructor() { }

  ngOnInit(): void {
    // Il popup si mostrerà automaticamente all'avvio
  }

  closePopup(): void {
    this.showPopup = false;
  }
}