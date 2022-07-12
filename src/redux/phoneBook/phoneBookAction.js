import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addPhoneBook = createAction('phoneBook/add', data => {
  return {
    payload: { ...data, id: nanoid() },
  };
});

export const filterPhoneBook = createAction('phoneBook/filter');

export const removePhoneBook = createAction('phoneBook/remove');
