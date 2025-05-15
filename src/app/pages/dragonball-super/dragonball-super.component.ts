import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super',
  imports: [NgClass],
  templateUrl: './dragonball-super.component.html',
  styleUrl: './dragonball-super.component.css',
})
export class DragonballSuperComponent {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
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
