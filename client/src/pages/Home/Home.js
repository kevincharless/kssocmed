import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Sidebar, PageGrid } from '../../components';
import { HomePage } from './Home.elements';

const Home = ({ userProfile, isSidebarActive, toggleSitebar }) => {
    const [currentPostId, setCurrentPostId] = useState();
    const history = useHistory();
    
    const clearUserProfile = () => localStorage.clear('profile');

    useEffect(() => {
        if (!userProfile) history.push('/auth');
    }, [userProfile, history]);

    return (
        <HomePage> 
            <Sidebar isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} userProfile={userProfile} clearUserProfile={clearUserProfile} />
            <PageGrid title="Home" isSidebarActive={isSidebarActive} userProfile={userProfile} currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />
        </HomePage>
    )
}

export default Home
