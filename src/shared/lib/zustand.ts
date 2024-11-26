import { IS_DEV } from '@shared/constants';
import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

export function createStore<TState>(store: StateCreator<TState>) {
  return IS_DEV ? create(devtools(store)) : create(store);
}
