import {PostReference} from "../types/post-reference.ts";
import {ApiResponse} from "../types/api-response.ts";

export const getAllPostsCall = async (): Promise<ApiResponse<PostReference[]>> => {
    const response: Response = await fetch('http://192.168.1.24:8080/api/public/allPosts', {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json() as ApiResponse<PostReference[]>;
}