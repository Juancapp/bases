import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  getHeroDescription() {
    return `${this.name} - ${this.age}`;
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22); // It cant use set method to update the signal value
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.update(() => 65); // It cant use update method to update the signal value
  }
}
