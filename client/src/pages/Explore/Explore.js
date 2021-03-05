import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Sidebar, PageGrid } from '../../components';
import { ExplorePage } from './Explore.elements';

const Explore = ({ userProfile, users, isSidebarActive, toggleSitebar }) => {
    const [currentPostId, setCurrentPostId] = useState();
    const history = useHistory();

    const clearUserProfile = () => localStorage.clear('profile');

    useEffect(() => {
        if (!userProfile) history.push('/auth');
    }, [userProfile, history]);

    return (
        <ExplorePage> 
            <Sidebar isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} userProfile={userProfile} clearUserProfile={clearUserProfile} />
            <PageGrid explorePage title="Explore" isSidebarActive={isSidebarActive} userProfile={userProfile} users={users} currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />
        </ExplorePage>
    )
}

export default Explore
