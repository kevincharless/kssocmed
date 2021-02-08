import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Sidebar, PageGrid } from '../../components';
import { getPosts } from '../../redux/actions/posts';

const Home = () => {
    const [currentPostId, setCurrentPostId] = useState();
    const [userProfile, setUserProfile] = useState(JSON.parse(localStorage.getItem('profile')));
    const [isSidebarActive, setIsSitebarActive] = useState(true);

    const dispatch = useDispatch();
    const history = useHistory();

    const toggleSitebar = () => {
        setIsSitebarActive(!isSidebarActive);
    }

    const clearUserProfile = () => setUserProfile(null);

    useEffect(() => {
        if(!userProfile) history.push('/auth')
    }, [userProfile, history]);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    return (
        <div style={{ width: "100%", display: "flex" }}> 
            <Sidebar isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} userProfile={userProfile} clearUserProfile={clearUserProfile} />
            <PageGrid isSidebarActive={isSidebarActive} userProfile={userProfile} currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />
        </div>
    )
}

export default Home
