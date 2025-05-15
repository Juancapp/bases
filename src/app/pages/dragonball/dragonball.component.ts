import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { DragonBallCharacterListComponent } from '../../components/dragonball/character-list/dragonball-character-list.component';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [NgClass, DragonBallCharacterListComponent],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css',
})
export class DragonballComponent {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 8500 },
    // { id: 3, name: 'Gohan', power: 7000 },
    // { id: 4, name: 'Piccolo', power: 6000 },
    // { id: 5, name: 'Frieza', power: 10000 },
    // { id: 6, name: 'Cell', power: 9500 },
    // { id: 7, name: 'Majin Buu', power: 1000 },
  ]);

  name = signal('');
  power = signal(0);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) {
      alert('Please enter a valid name and power level.');
      return;
    }

    this.characters.update((characters) => [
      ...characters,
      {
        id: this.characters().length + 1,
        name: this.name(),
        power: this.power(),
      },
    ]);

    this.name.set('');
    this.power.set(1000);
  }
}
