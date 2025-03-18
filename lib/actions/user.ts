import axios from 'axios';
import {
    loginRequest,
    loginSuccess,
    registerRequest,
    registerSuccess,
    loadUserRequest,
    loadUserSuccess
} from '../store/features/user/userSlice';
import { contactRequest, contactSuccess, loadContactRequest, loadContactSuccess } from '../store/features/data/contact';
import { loadrquirmentFailure, loadrquirmentRequest, loadrquirmentSuccess, rquirmentRequest, rquirmentSuccess } from '../store/features/requirment/require';
import { workspaceRequest, workspaceSuccess } from '../store/features/data/workspace';

// Create an axios instance
const api = axios.create({
    baseURL: "https://api.sevenwonder.in",
    withCredentials: true,  // ✅ Ensure this is included
});

// Define the form data type (replace `any` with specific types if available)
interface FormData {
    email: string;
    password: string;
    [key: string]: any; // Add any additional fields
}//,cvbndbnkfn
// Async function to login the user
export const loginUser = (formData: FormData) => async (dispatch: (action: any) => void) => {
    try {
        dispatch(loginRequest());

        const { data } = await api.post(
            '/api/auth/login',
            JSON.stringify(formData),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        dispatch(loginSuccess(data.user));
    } catch (error: any) {
        console.error(error);
    }
};

// Async function to register the user
export const registerUser = (formData: FormData) => async (dispatch: (action: any) => void) => {
    try {
        dispatch(registerRequest());

        const { data } = await api.post(
            '/api/auth/register',
            JSON.stringify(formData),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        dispatch(registerSuccess(data.user));
    } catch (error: any) {
        console.error(error);
    }
};

export const loadUser = () => async (dispatch: (action: any) => void) => {
    try {
        dispatch(loadUserRequest());

        const { data } = await api.get("/api/auth/me");

        dispatch(loadUserSuccess(data.user));
    } catch (error: any) {
        console.error(error.response?.data?.message || 'Failed to load user');
    }
}

export const postContact = (formData: any) => async (dispatch: (action: any) => void) => {
    try {
        dispatch(contactRequest());
        const { data } = await api.post(
            "/api/contact",
            JSON.stringify(formData),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        dispatch(contactSuccess(data.contact));
    } catch (error) {
        console.log(error);
    }
}

export const getContacts = () => async (dispatch: (action: any) => void) => {
    try {
        dispatch(loadContactRequest());
        const { data } = await api.get(
            "/api/contact"
        )
        dispatch(loadContactSuccess(data.contacts));
    } catch (error) {
        console.log(error);
    }
}

export const postRequirment = (formData: any) => async (dispatch: (action: any) => void) => {
    try {
        dispatch(rquirmentRequest());
        const { data } = await api.post(
            "/api/requirment",
            JSON.stringify(formData),
            {
                headers: {
                    "Content-Type": 'application/json',
                }
            }
        )
        dispatch(rquirmentSuccess(data.requirement))
    } catch (error) {
        console.log(error);
    }
}
export const getRequirment = () => async (dispatch: (action: any) => void) => {
    try {
        dispatch(loadrquirmentRequest()); // Dispatch the request action
        const { data } = await api.get('/api/requirment'); // Fetch data from the API
        dispatch(loadrquirmentSuccess(data)); // Dispatch the success action with the data
    } catch (error: any) {
        dispatch(loadrquirmentFailure(error.response?.data?.message || 'Failed to load requirements'));
    }
};


export const postWorkspace = (fData:any) => async (dispatch: (action: any) => void) => {
    try {
        dispatch(workspaceRequest());
        const { data } = await api.post(
            "api/workspace",
            JSON.stringify(fData),
            {
                headers: {
                    "Content-Type": 'application/json',
                }
            }
        )
        dispatch(workspaceSuccess(data.workspace));
    } catch (error) {
        console.log(error);
    }
}

