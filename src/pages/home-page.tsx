import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllPosts} from "../redux/slices/all-posts-slice.ts";
import {AppDispatch, RootState} from "../redux/store.ts";
import {PostReference} from "../types/post-reference.ts";

export const HomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const {posts, loading, error} = useSelector((state: RootState) => state.allPosts);

    useEffect(() => {
        if (posts.length === 0 && !loading) {
            (async () => {
                const data: PostReference[] = await dispatch(fetchAllPosts()).unwrap();
                console.log(data);
            })();
        }
    }, [dispatch, posts.length, loading]);

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    if (error) {
        return (
            <div>
                Error: {error}
            </div>
        );
    }

    return (
        <div>
            <h1>HOME</h1>
            <Button onClick={() => navigate("/login")}>Login</Button>
            <Button onClick={() => navigate("/register")}>Register</Button>
            {Array.isArray(posts) && posts.map((post: PostReference) => (
                <div key={post.uuid}>
                    <p>{post.title}</p>
                    <p>{post.editor.firstName}</p>
                </div>
            ))}
        </div>
    );
}