import { createAction } from '@reduxjs/toolkit';

export const deleteMessage = createAction('message/deleteMessage');

export const addMessageAction = createAction('message/addMessage');

export const editMessage = createAction('message/editMessage');
