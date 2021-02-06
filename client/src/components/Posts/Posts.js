import React from 'react'
import { useSelector } from 'react-redux';
import Post from './Post/Post';

import { Grid } from './Posts.element';

const Posts = ({ isSidebarActive, user, setCurrentPostId }) => {
    const posts = useSelector(state => state.posts);

    var sortedPosts = posts.sort((a,b) => {
        return new Date(a.createdAt).getTime() - 
            new Date(b.createdAt).getTime()
    }).reverse();


    return (
        <Grid isSidebarActive={isSidebarActive}>
            {sortedPosts.map(post => (
                <Post key={post._id} post={post} user={user} setCurrentPostId={setCurrentPostId} />
            ))}
        </Grid>
    )
}

export default Posts;
