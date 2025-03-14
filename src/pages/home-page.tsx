import {Box, Button, Container, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllPosts} from "../redux/slices/all-posts-slice.ts";
import {AppDispatch, RootState} from "../redux/store.ts";
import {PostReference} from "../types/post-reference.ts";
import {MainNavBar} from "../components/ui/main-navbar.tsx";

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
        <>
            <MainNavBar />
            <Container sx={{my: 8}}>
                <Box>
                    <Typography component="h1" variant="h1">
                        How to Cheer Up: Simple Ways to Boost Your Mood
                    </Typography>
                    <Typography component="h3" variant="subtitle1">
                        Because Everyone Needs a Pick-Me-Up Sometimes
                    </Typography>
                    <Typography component="p" variant="body1">
                        Life has its ups and downs, and some days just feel heavier than others. Whether it's stress from work, personal struggles, or just an unexplained case of the blues, we all experience moments when we need a little cheering up. The good news? There are plenty of simple, effective ways to lift your spirits and brighten your day. Let’s explore some of the best ways to turn a rough day into a better one.
                    </Typography>
                </Box>
                {Array.isArray(posts) && posts.map((post: PostReference) => (
                    <Box key={post.uuid}>
                        <Typography component="h1" variant="h1">
                            {post.title}
                        </Typography>
                        <Typography component="h3" variant="subtitle1">
                            {post.editor.firstName} {post.editor.lastName}
                        </Typography>
                    </Box>
                ))}
            </Container>
        </>
    );
}