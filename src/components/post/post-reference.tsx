import {PostReference} from "../../types/post-reference.ts";
import {useEffect} from "react";
import globalStyle from "../../styles/global.module.css";

export const PostReferenceMain = (props:
{
    post: PostReference
}) => {

    useEffect(() => {
        console.log(props.post);
    }, [props]);

    return (
			<div className={globalStyle.postReferenceContainer}>
				<img
					src={`https://images.pexels.com/photos/5006967/pexels-photo-5006967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
					className={globalStyle.postReferenceImage}
				/>
				<h1 className={globalStyle.referenceTitle}>This Is Where the Title Goes</h1>
				<h3 className={globalStyle.referenceSubtitle}>This is where the subtitle goes</h3>
				<p className={globalStyle.referenceAuthor}>Savannah Cottis</p>
				<p className={globalStyle.referenceDate}>
					{new Date().toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					})}
				</p>
			</div>
		);
}