import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  counterSignal = signal(10);

  increment() {
    this.counterSignal.update((value) => value + 1);
  }

  decrement() {
    if (this.counterSignal() > 0) {
      this.counterSignal.update((value) => value - 1);
    }
  }

  reset() {
    this.counterSignal.update(() => 0);
  }
}
