import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/auth-slice.ts";
import allPostsReducer from "./slices/all-posts-slice.ts";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        allPosts: allPostsReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;