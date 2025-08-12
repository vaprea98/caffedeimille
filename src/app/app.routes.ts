import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CaffetteriaComponent } from './components/caffetteria/caffetteria.component';
import { DrinkeriaComponent } from './components/drinkeria/drinkeria.component';
import { PasticceriaComponent } from './components/pasticceria/pasticceria.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'caffetteria', component: CaffetteriaComponent },
  { path: 'drinkeria', component: DrinkeriaComponent },
  { path: 'pasticceria', component: PasticceriaComponent },
  { path: '**', redirectTo: '' }
];