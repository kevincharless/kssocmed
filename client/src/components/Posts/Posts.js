import React from 'react'
import { useSelector } from 'react-redux';
import Post from './Post/Post';

import { Grid } from './Posts.element';

const Posts = ({ isSidebarActive, user }) => {
    const posts = useSelector(state => state.posts);
    console.log(posts)
    return (
        <Grid isSidebarActive={isSidebarActive}>
            {posts.map(post => (
                <Post key={post._id} post={post} user={user} />
            ))}
        </Grid>
    )
}

export default Posts;
