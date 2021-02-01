import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Sidebar, PageGrid } from '../../components';

const Home = () => {
    const [userProfile, setUserProfile] = useState(JSON.parse(localStorage.getItem('profile')));
    const [isSidebarActive, setIsSitebarActive] = useState(true);

    const history = useHistory();

    const toggleSitebar = () => {
        setIsSitebarActive(!isSidebarActive);
    }

    const clearUserProfile = () => setUserProfile(null);

    useEffect(() => {
        if(!userProfile) history.push('/auth')
    }, [userProfile]);

    return (
        <div style={{ width: "100%", display: "flex" }}> 
            <Sidebar isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} userProfile={userProfile} clearUserProfile={clearUserProfile} />
            <PageGrid isSidebarActive={isSidebarActive} userProfile={userProfile} />
        </div>
    )
}

export default Home
