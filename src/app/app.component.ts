import { Component } from '@angular/core';
import {DiceRollerComponent} from "./dice-roller/dice-roller.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports:  [DiceRollerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'virtual-dice-roller';
}
