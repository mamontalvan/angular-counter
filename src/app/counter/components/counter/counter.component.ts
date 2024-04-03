import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h2>Desde aquí inicia CounterComponent</h2>
  <h3>Counter: {{counter}}</h3>
  <button (click)="increaseBy(2)">+1</button>
  <button (click)="decreaseBy(3)">-1</button>
  <button (click)="resetCounter()">Reset</button>
  `
})

export class CounterComponent  {
  public counter: number = 10;

  increaseBy(value:number): void { this.counter += value }
  decreaseBy(value:number): void { this.counter -= value }
  resetCounter(): void { this.counter = 10 }
}


