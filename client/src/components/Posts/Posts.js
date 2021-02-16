import React from 'react'
import { useSelector } from 'react-redux';
import Post from './Post/Post';

import { Grid } from './Posts.element';

const Posts = ({ isSidebarActive, user, setCurrentPostId }) => {
    const posts = useSelector(state => state.posts);

    return (
        <Grid isSidebarActive={isSidebarActive}>
            {posts.map(post => (
                <Post key={post._id} post={post} user={user} setCurrentPostId={setCurrentPostId} />
            ))}
        </Grid>
    )
}

export default Posts;
