import React from 'react'
import Post from './Post/Post';

import { Grid } from './Posts.element';

const Posts = ({ isSidebarActive }) => {
    return (
        <Grid isSidebarActive={isSidebarActive}>
            <Post />
            <Post />
            <Post />
        </Grid>
    )
}

export default Posts;
