import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UserAuth} from "../../types/user-auth.ts";
import {loginCall} from "../../network/login-call.ts";
import {Credentials} from "../../types/credentials.ts";
import {LoginPayload} from "../../types/login-payload.ts";

interface AuthState {
    isAuthenticated: boolean;
    user: UserAuth | undefined;
    token: string | undefined;
    loading: boolean;
    error: string | undefined;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: undefined,
    token: undefined,
    loading: false,
    error: undefined,
};

export const login = createAsyncThunk(
    "auth/login",
    async (credentials: Credentials, {rejectWithValue}) => {
        try {
            const data: LoginPayload = await loginCall(credentials);
            return data;
        } catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = undefined;
            state.token = undefined;
            state.loading = false;
            state.error = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    }
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;