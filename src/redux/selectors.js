import { createSelector } from '@reduxjs/toolkit';

export const getMessages = state => state.chat.messages;
export const getLoading = state => state.chat.loading;

export const getUsers = createSelector(getMessages, message => {
  return message.map(message => message.user);
});

export const getNumberUsers = createSelector(getUsers, users => {
  return users.filter((user, i, arr) => arr.indexOf(user) === i);
});
export const lastMessageDate = createSelector(getMessages, messages => {
  const dateArr = messages.map(message => message.created_at);
  return dateArr[dateArr.length - 1];
});
