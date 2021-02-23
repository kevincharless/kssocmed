import React from 'react'
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import { LoadingSpinner } from '../index';

import { Grid, Center } from './Posts.element';

const Posts = ({ myPosts, isSidebarActive, user, setCurrentPostId }) => {
    const posts = useSelector(state => state.posts);
    
    return (
        posts.isLoading ? (
            <Center>
                <LoadingSpinner />
            </Center>
        ) : (
            <Grid isSidebarActive={isSidebarActive}>
                {myPosts ? (
                    posts.posts.map(post => post.creator === user?._id ? (
                        <Post key={post._id} post={post} user={user} setCurrentPostId={setCurrentPostId} />
                    ) : (
                    post.creator === user?.googleId && (
                        <Post key={post._id} post={post} user={user} setCurrentPostId={setCurrentPostId} />
                    ))
                    ) 
                ) : (
                    posts.posts.map(post => (
                        <Post key={post._id} post={post} user={user} setCurrentPostId={setCurrentPostId} />
                    ))
                )}
            </Grid>
        )
    )
}

export default Posts;
