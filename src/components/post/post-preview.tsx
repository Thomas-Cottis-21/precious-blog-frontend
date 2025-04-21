import globalStyles from "../../styles/global.module.css";
import {PostReference} from "../../types/post-reference.ts";

export const PostPreview = (props: {post: PostReference}) => {
    return (
			<div>
				<img
					src={
						'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
					}
					alt={props.post.slug}
					className={globalStyles.postReferenceImage}
				/>
				<h1>{props.post.title}</h1>
				<h3>subtitle here</h3>
			</div>
		);
}