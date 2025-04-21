import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllPosts} from "../redux/slices/all-posts-slice.ts";
import {AppDispatch, RootState} from "../redux/store.ts";
import {PostReference} from "../types/post-reference.ts";
import {MainNavBar} from "../components/ui/main-navbar.tsx";
import {Col, Container, Row} from "react-bootstrap";
import {PostReferenceMain} from "../components/post/post-reference.tsx";

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
            <Container fluid>
                <Row>
                    <Col>
                        <PostReferenceMain post={posts[0]} />
                    </Col>
                    <Col>
                        <PostReferenceMain post={posts[1]} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <PostReferenceMain post={posts[0]} />
                    </Col>
                    <Col>
                        <PostReferenceMain post={posts[1]} />
                    </Col>
                    <Col>
                        <PostReferenceMain post={posts[1]} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}