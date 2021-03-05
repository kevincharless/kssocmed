import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect  } from 'react-router-dom';
import { LoadingSpinner, Sidebar, PageHeader, ProfileHeader, Title, Posts, NewPostForm } from '../../components';
import { ProfilePage, Container, Center, EditPostDiv } from './Profile.elements'
import { getOtherProfile, clearOtherProfile } from '../../redux/actions/auth';

const Profile = ({ users, userProfile, isSidebarActive, toggleSitebar }) => {
    const [currentPostId, setCurrentPostId] = useState();
    const [isMount, setIsMount] = useState(true);
    const otherProfile = useSelector(state => state.auth.otherProfile);
    const isLoading = useSelector(state => state.auth.isLoading);
    const { id } = useParams();

    const dispatch = useDispatch();
    const clearUserProfile = () => localStorage.clear('profile');

    useEffect(() => {
        dispatch(clearOtherProfile());
        if (id) dispatch(getOtherProfile(id));
        setIsMount(false)
    }, [dispatch, id])

    useEffect(() => {
        if (!userProfile) <Redirect to="/auth" />;
    }, [userProfile]);

    if (isMount) return <Center><LoadingSpinner /></Center>
    
    return (
        <ProfilePage>
            <Sidebar isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} userProfile={userProfile} clearUserProfile={clearUserProfile} />
            <Container>
                {isLoading ? (
                    <Center>
                        <LoadingSpinner />
                    </Center>
                ) : (
                    <>
                        <PageHeader title="Profile" noSearch isSidebarActive={isSidebarActive} />
                        <ProfileHeader otherProfile={otherProfile} isSidebarActive={isSidebarActive} userProfile={userProfile} currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />
                        <Title title="My Post" />
                        {currentPostId && (
                            <EditPostDiv>
                                <NewPostForm user={userProfile} currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />
                            </EditPostDiv>
                        )}
                        {otherProfile.length === 0 ? (
                            <Posts myPosts isSidebarActive={isSidebarActive} user={userProfile.result} setCurrentPostId={setCurrentPostId} />
                        ) : (
                            <Posts myPosts isSidebarActive={isSidebarActive} user={otherProfile} setCurrentPostId={setCurrentPostId} />
                        )}
                    </>
                )}
            </Container>
        </ProfilePage>
    )
}

export default Profile;
