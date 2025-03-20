import { bootstrapApplication } from '@angular/platform-browser';
import { DiceRollerComponent } from './app/dice-roller/dice-roller.component';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(DiceRollerComponent, {
  providers: [provideAnimations()],
});
