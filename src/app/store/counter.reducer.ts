import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

// initial state
export const initialState = 0;

// create reducer function
export const reducer = createReducer(
  initialState,

  // on increment action
  on(increment, (state) => state + 1),

  // on decrement action

  on(decrement, (state) => state - 1),
  // on reset action

  on(reset, (state) => initialState),
);
