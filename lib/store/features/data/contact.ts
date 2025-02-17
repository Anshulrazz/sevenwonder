import { createReducer, PayloadAction, createAction } from "@reduxjs/toolkit";

// Define the types for the initial state
interface ContactState {
    loading: boolean;
    contact: [] | null; // Replace `any` with a proper user type if available
    error: string | null;
}

// Initial states
const initialContactState: ContactState = {
    loading: false,
    contact: [],
    error: null,
};

// Define action creators
export const contactRequest = createAction("contactRequest");
export const contactSuccess = createAction<any>("contactSuccess");
export const contactFailure = createAction<string>("contactFailure"); // Fixed: Added export

export const loadContactRequest = createAction("LoadContactRequest");
export const loadContactSuccess = createAction<any>("LoadContactSuccess");
export const loadContactFailure = createAction<string>("LoadContactFailure"); // Fixed: Added export

export const clearErrors = createAction("clearErrors"); // Fixed: Added export

// User reducer using builder callback notation
export const contactReducer = createReducer(initialContactState, (builder) => {
    builder
        .addCase(contactRequest, (state) => {
            state.loading = true;
        })
        .addCase(contactSuccess, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.contact = action.payload;
        })
        .addCase(contactFailure, (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(loadContactRequest, (state) => {
            state.loading = true;
        })
        .addCase(loadContactSuccess, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.contact = action.payload;
        })
        .addCase(loadContactFailure, (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(clearErrors, (state) => {
            state.error = null;
        });
});