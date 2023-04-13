import { createSelector } from '@reduxjs/toolkit';

export const selectUser = state => state.auth.user;

export const selectAccessToken = state => state.auth.accessToken;

export const selectRefreshToken = state => state.auth.refreshToken;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;
