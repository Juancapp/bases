import { Component, input } from '@angular/core';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './dragonball-character-list.component.html',
})
export class DragonBallCharacterListComponent {
  characters = input.required();
}
