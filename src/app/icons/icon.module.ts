import { NgModule } from '@angular/core';
import { ShotGlassIconComponent } from './shot-glass-icon.component';
import { ChampagneGlassIconComponent } from './champagne-glass-icon.component';
import { AmariGlassIconComponent } from './amari-glass.component';

@NgModule({
  imports: [ShotGlassIconComponent, ChampagneGlassIconComponent, AmariGlassIconComponent],
  exports: [ShotGlassIconComponent, ChampagneGlassIconComponent, AmariGlassIconComponent] 
})
export class IconsModule {}