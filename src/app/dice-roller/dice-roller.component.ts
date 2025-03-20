import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent {
  diceCount: number = 1;
  diceType: number = 6;
  diceTypes: number[] = [4, 6, 8, 12, 20];
  rollResults: number[] = [];
  rollTotal: number = 0;

  // Method to roll the dice
  rollDice(): void {
    this.rollResults = [];
    this.rollTotal = 0;
    for (let i = 0; i < this.diceCount; i++) {
      const result = Math.floor(Math.random() * this.diceType) + 1;
      this.rollResults.push(result);
      this.rollTotal += result;
    }
  }
}
