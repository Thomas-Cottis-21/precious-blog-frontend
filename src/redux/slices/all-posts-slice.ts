import {PostReference} from "../../types/post-reference.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAllPostsCall} from "../../network/get-all-posts-call.ts";
import {ApiResponse} from "../../types/api-response.ts";

interface AllPostsState {
    posts: PostReference[];
    loading: boolean;
    error: string | undefined;
}

const initialState: AllPostsState = {
    posts: [],
    loading: false,
    error: undefined,
}

export const fetchAllPosts = createAsyncThunk (
    "posts/fetchAllPosts",
    async (_, {rejectWithValue}) => {
        try {
            const response: ApiResponse<PostReference[]> = await getAllPostsCall();
            return response.data as PostReference[];
        } catch (error: unknown) {
            return rejectWithValue(error);
        }
    }
)

const allPostsSlice = createSlice({
    name: "allPosts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
                state.error = undefined;
            })
            .addCase(fetchAllPosts.rejected, (state, action) => {
                state.loading = false;
                state.posts = [];
                state.error = action.payload as string;
            })
    }
});

export default allPostsSlice.reducer;