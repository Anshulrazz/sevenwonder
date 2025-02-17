import { createReducer, PayloadAction, createAction } from "@reduxjs/toolkit";

// Define the Requirement type
interface Workspace {
    workspace: any | null;
}

// Define the types for the initial state
interface WorkspaceState {
    loading: boolean;
    workspace: Workspace[] | null; // Array of requirements or null
    error: string | null;
}

// Initial state
const initialWorkspaceState: WorkspaceState = {
    loading: false,
    workspace: [],
    error: null,
};

// Define action creators
export const workspaceRequest = createAction("workspaceRequest");
export const workspaceSuccess = createAction<Workspace[]>("workspaceSuccess");
export const workspaceFailure = createAction<string>("workspaceFailure");

export const loadworkspaceRequest = createAction("loadworkspaceRequest");
export const loadworkspaceSuccess = createAction<Workspace[]>("loadworkspaceSuccess");
export const loadworkspaceFailure = createAction<string>("loadworkspaceFailure");

export const clearErrors = createAction("clearErrors");

// Reducer using builder callback notation
export const workspaceReducer = createReducer(initialWorkspaceState, (builder) => {
    builder
        // rquirmentRequest
        .addCase(workspaceRequest, (state) => {
            state.loading = true;
        })
        // rquirmentSuccess
        .addCase(workspaceSuccess, (state, action: PayloadAction<Workspace[]>) => {
            state.loading = false;
            state.workspace = action.payload;
        })
        // rquirmentFailure
        .addCase(workspaceFailure, (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        })

        // loadrquirmentRequest
        .addCase(loadworkspaceRequest, (state) => {
            state.loading = true;
        })
        // loadrquirmentSuccess
        .addCase(loadworkspaceSuccess, (state, action: PayloadAction<Workspace[]>) => {
            state.loading = false;
            state.workspace = action.payload;
        })
        // loadrquirmentFailure
        .addCase(loadworkspaceFailure, (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        })

        // clearErrors
        .addCase(clearErrors, (state) => {
            state.error = null;
        });
});
