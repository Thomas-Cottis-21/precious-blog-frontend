import {PostReference} from "../../types/post-reference.ts";
import {useEffect} from "react";

export const PostReferenceMain = (props:
{
    post: PostReference
}) => {

    useEffect(() => {
        console.log(props.post);
    }, [props]);

    return (
        <div>
            <img
                src={`https://youareprecious.sfo2.cdn.digitaloceanspaces.com${props.post.mainImageKey}`}
                width="100%"
            />
            <h1 className="title">This Is Where the Title Goes</h1>
            <h3 className="subtitle">This Is Where the Subtitle Goes</h3>
            <p>Savannah Cottis</p>
            <p>{new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}</p>
        </div>
    )
}