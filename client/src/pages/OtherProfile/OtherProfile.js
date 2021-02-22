import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Redirect  } from 'react-router-dom';
import { Sidebar, PageHeader, ProfileHeader, Title, Posts } from '../../components';
import { OtherProfilePage, Container } from './OtherProfile.elements';

import { getOtherProfile } from '../../redux/actions/auth';

const OtherProfile = ({ isSidebarActive, toggleSitebar }) => {
    const userProfile = useSelector(state => state.auth.authData);
    const otherProfile = useSelector(state => state.auth.otherProfile);
    const [currentPostId, setCurrentPostId] = useState();
    const { id } = useParams();

    const dispatch = useDispatch();
    const clearUserProfile = () => localStorage.clear('profile');

    useEffect(() => {
        dispatch(getOtherProfile(id));
    }, [dispatch, id])

    useEffect(() => {
        if (!userProfile) <Redirect to="/auth" />;
    }, [userProfile]);

    return (
        <OtherProfilePage> 
            <Sidebar isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} userProfile={userProfile} clearUserProfile={clearUserProfile} />
            <Container>
                <PageHeader title="Profile" isSidebarActive={isSidebarActive} />
                <ProfileHeader isSidebarActive={isSidebarActive} userProfile={otherProfile} currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />
                <Title title="My Post" />
                <Posts myPosts isSidebarActive={isSidebarActive} user={otherProfile} setCurrentPostId={setCurrentPostId} />
            </Container>
        </OtherProfilePage>
    )
}

export default OtherProfile;
