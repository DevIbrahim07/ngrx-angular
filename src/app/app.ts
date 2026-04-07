import { Component, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './store/counter.actions';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { counterFeature } from './store/counter.feature';
//import { AppState, selectCounter } from './store/counter.selector';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  counter$!: Observable<number>;

  // constructor(private store: Store<AppState>) {
  //   this.counter$ = this.store.select(selectCounter);
  // }
  constructor(private store: Store) {
    this.counter$ = this.store.select(counterFeature.selectCounterState);
  }

  inc() {
    this.store.dispatch(increment());
  }

  // dec

  dec() {
    this.store.dispatch(decrement());
  }

  // reset

  resetCount() {
    this.store.dispatch(reset());
  }
}
