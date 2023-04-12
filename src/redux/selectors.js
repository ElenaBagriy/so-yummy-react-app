import { createSelector } from '@reduxjs/toolkit';

export const selectToken = state => state.user.accessToken;
