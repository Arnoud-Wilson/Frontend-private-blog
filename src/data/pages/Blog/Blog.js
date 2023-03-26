import React from 'react';
import Posts from "../../posts.json";
import { useParams} from "react-router-dom";

function Blog() {
    const {blogId} = useParams();

    const SingleBlogPost = Posts.map((blogPost) => {
        return blogId === blogPost.id &&
            <>
                <h1> {blogPost.title} </h1>
                <h2> {blogPost.date} </h2>
                <p> {blogPost.content} </p>
            </>
    });

    return (
        <>
           {SingleBlogPost}
        </>
    );
}

export default Blog;

