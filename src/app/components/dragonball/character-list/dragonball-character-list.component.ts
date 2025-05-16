import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';
@Component({
  selector: 'dragonball-character-list',
  imports: [NgClass],
  templateUrl: './dragonball-character-list.component.html',
})
export class DragonBallCharacterListComponent {
  characters = input.required<Character[]>();
}
