import { createReducer, PayloadAction, createAction } from "@reduxjs/toolkit";

// Define the types for the initial state
interface UserState {
    loading: boolean;
    user: any | null; // Replace `any` with a proper user type if available
    isAuthenticated: boolean;
    error: string | null;
}



// Initial states
const initialUserState: UserState = {
    loading: false,
    user: null,
    isAuthenticated: false,
    error: null,
};



// Define action creators
export const loginRequest = createAction("LoginRequest");
export const loginSuccess = createAction<any>("LoginSuccess");
const loginFailure = createAction<string>("LoginFailure");

export const registerRequest = createAction("RegisterRequest");
export const registerSuccess = createAction<any>("RegisterSuccess");
const registerFailure = createAction<string>("RegisterFailure");

export const loadUserRequest = createAction("LoadUserRequest");
export const loadUserSuccess = createAction<any>("LoadUserSuccess");
const loadUserFailure = createAction<string>("LoadUserFailure");

const logoutUserRequest = createAction("LogoutUserRequest");
const logoutUserSuccess = createAction("LogoutUserSuccess");
const logoutUserFailure = createAction<string>("LogoutUserFailure");


const clearErrors = createAction("clearErrors");

// User reducer using builder callback notation
export const userReducer = createReducer(initialUserState, (builder) => {
    builder
        .addCase(loginRequest, (state) => {
            state.loading = true;
        })
        .addCase(loginSuccess, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        })
        .addCase(loginFailure, (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
        })

        .addCase(registerRequest, (state) => {
            state.loading = true;
        })
        .addCase(registerSuccess, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        })
        .addCase(registerFailure, (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
        })

        .addCase(loadUserRequest, (state) => {
            state.loading = true;
        })
        .addCase(loadUserSuccess, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        })
        .addCase(loadUserFailure, (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
        })

        .addCase(logoutUserRequest, (state) => {
            state.loading = true;
        })
        .addCase(logoutUserSuccess, (state) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
        })
        .addCase(logoutUserFailure, (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = true;
        })

        .addCase(clearErrors, (state) => {
            state.error = null;
        });
});
