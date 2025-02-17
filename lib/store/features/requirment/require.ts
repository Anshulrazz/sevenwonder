import { createReducer, PayloadAction, createAction } from "@reduxjs/toolkit";

// Define the Requirement type
interface Requirement {
    name: string;
    company: string;
    email: string;
    budget: number;
    location: string;
    message: string;
    moveInDate: string; // ISO string for Date
    phone: string;
    requirementType: string;
    seatingCapacity: number;
    workspaceType: string;
}

// Define the types for the initial state
interface RquirmentState {
    loading: boolean;
    requirement: Requirement[] | null; // Array of requirements or null
    error: string | null;
}

// Initial state
const initialRequirmentState: RquirmentState = {
    loading: false,
    requirement: [],
    error: null,
};

// Define action creators
export const rquirmentRequest = createAction("rquirmentRequest");
export const rquirmentSuccess = createAction<Requirement[]>("rquirmentSuccess");
export const rquirmentFailure = createAction<string>("rquirmentFailure");

export const loadrquirmentRequest = createAction("loadrquirmentRequest");
export const loadrquirmentSuccess = createAction<Requirement[]>("loadrquirmentSuccess");
export const loadrquirmentFailure = createAction<string>("loadrquirmentFailure");

export const clearErrors = createAction("clearErrors");

// Reducer using builder callback notation
export const rquirmentReducer = createReducer(initialRequirmentState, (builder) => {
    builder
        // rquirmentRequest
        .addCase(rquirmentRequest, (state) => {
            state.loading = true;
        })
        // rquirmentSuccess
        .addCase(rquirmentSuccess, (state, action: PayloadAction<Requirement[]>) => {
            state.loading = false;
            state.requirement = action.payload;
        })
        // rquirmentFailure
        .addCase(rquirmentFailure, (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        })

        // loadrquirmentRequest
        .addCase(loadrquirmentRequest, (state) => {
            state.loading = true;
        })
        // loadrquirmentSuccess
        .addCase(loadrquirmentSuccess, (state, action: PayloadAction<Requirement[]>) => {
            state.loading = false;
            state.requirement = action.payload;
        })
        // loadrquirmentFailure
        .addCase(loadrquirmentFailure, (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        })

        // clearErrors
        .addCase(clearErrors, (state) => {
            state.error = null;
        });
});
