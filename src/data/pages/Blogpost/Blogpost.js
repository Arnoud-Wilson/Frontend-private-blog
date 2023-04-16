import React from 'react';
import Posts from "../../posts.json";
import {Link} from "react-router-dom";

function Blogpost() {

    const BlogPosts = Posts.map((blogPost) => {
        return <li key={blogPost.id}> <Link to={"/blog/" + blogPost.id}>{blogPost.title} </Link> </li>
    });

    return (
        <>
            <h1>Blog overzichtspagina</h1>
            <h2>Aantal blogposts: {Posts.length}</h2>
            <ul>
                {BlogPosts}
            </ul>
        </>
    );
}

export default Blogpost;

// TO DO: STRING INTERPILATION??? LINK NAAR :ID!!!