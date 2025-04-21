import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllPosts} from "../redux/slices/all-posts-slice.ts";
import {AppDispatch, RootState} from "../redux/store.ts";
import {PostReference} from "../types/post-reference.ts";
import {MainNavBar} from "../components/ui/main-navbar.tsx";
import {Col, Container, Row} from "react-bootstrap";
import {PostPreview} from "../components/post/post-preview.tsx";

export const HomePage = () => {
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
            {posts && posts.length > 0 && (
                <Container>
                    <Row>
                        <Col>
                            <PostPreview post={posts[0]} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <PostPreview post={posts[1]} />
                        </Col>
                        <Col>
                            <PostPreview post={posts[2]} />
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    );
}