import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addPhoneBook,
  filterPhoneBook,
  removePhoneBook,
} from './phoneBookAction';

const items = createReducer([], {
  [addPhoneBook]: (store, { payload }) => [...store, payload],
  [removePhoneBook]: (store, { payload }) =>
    store.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filterPhoneBook]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
