import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, refreshUser, refreshToken, registerUser } from "./authOperations";

const authInitialState = {
    user: {
        name: null,
        email: null,
        avatarURL: null,
    },
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: (builder) =>
        builder
            
            // ------------ Register user ----------------
            .addCase(registerUser.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoading = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.error = action.payload.message;
                state.isLoading = false;
            })
    
            // ------------ Login user ----------------
            .addCase(loginUser.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
                state.user = action.payload.user;
                state.isLoggedIn = true;
                state.isLoading = false;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.payload.message;
                state.isLoading = false;
            })

            // ------------ Logout user ----------------
            .addCase(logoutUser.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.accessToken = null;
                state.refreshToken = null;
                state.user = {   
                    name: null,
                    email: null,
                    avatarURL: null,
                };
                state.isLoggedIn = false;
                state.isLoading = false;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.error = action.payload.message;
                state.isLoading = false;
            })

            // ------------ Refresh token ----------------
            .addCase(refreshToken.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(refreshToken.fulfilled, (state, action) => {
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
                state.isLoading = false;
            })
            .addCase(refreshToken.rejected, (state, action) => {
                state.error = action.payload.message;
                state.isLoading = false;
            })

            // ------------ Refresh user ----------------
            .addCase(refreshUser.pending, (state) => {
                state.error = null;
                state.isLoading = true;
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = {   
                    name: null,
                    email: null,
                    avatarURL: null,
                };
                state.isLoggedIn = true;
                state.isLoading = false;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state, action) => {
                state.error = action.payload.message;
                state.isLoading = false;
                state.isRefreshing = false;
            })
});



export const authReducer = authSlice.reducer;