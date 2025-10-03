import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { LucideAngularModule, ArrowLeftIcon, MapPin, Phone, Clock, Martini, CupSoda, Wine, Beer, Croissant, Donut, CakeSlice } from 'lucide-angular';
import { IconsModule } from './app/icons/icon.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(LucideAngularModule.pick({ ArrowLeftIcon, MapPin, Phone, Clock, Martini, CupSoda, Wine, Beer, Croissant, Donut, CakeSlice }), IconsModule)

  ]
}).catch(err => console.error(err));