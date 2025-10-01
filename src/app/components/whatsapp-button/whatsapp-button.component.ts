import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.css']
})
export class WhatsappButtonComponent {
  // Numero di telefono per WhatsApp (senza spazi o caratteri speciali)
  phoneNumber = '390813599118';
  
  // Messaggio predefinito (opzionale)
  defaultMessage = 'Ciao! Vorrei avere informazioni sul Caffè dei Mille.';
  
  getWhatsAppLink(): string {
    // Codifica il messaggio per l'URL
    const encodedMessage = encodeURIComponent(this.defaultMessage);
    return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
  }
}