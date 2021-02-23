import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect  } from 'react-router-dom';
import { LoadingSpinner, Sidebar, PageHeader, ProfileHeader, Title, Posts, NewPostForm } from '../../components';
import { ProfilePage, Container, Center, EditPostDiv } from './Profile.elements'
import { getOtherProfile, clearOtherProfile } from '../../redux/actions/auth';

const Profile = ({ userProfile, isSidebarActive, toggleSitebar }) => {
    const [currentPostId, setCurrentPostId] = useState();
    const [isMount, setIsMount] = useState(true);
    const otherProfile = useSelector(state => state.auth.otherProfile);
    const isLoading = useSelector(state => state.auth.isLoading);
    const profileData = otherProfile.length === 0 ? userProfile?.result : otherProfile;
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
                        <PageHeader title="Profile" isSidebarActive={isSidebarActive} />
                        <ProfileHeader otherProfile={id} isSidebarActive={isSidebarActive} userProfile={profileData} currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />
                        <Title title="My Post" />
                        {currentPostId && (
                            <EditPostDiv>
                                <NewPostForm user={profileData} currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />
                            </EditPostDiv>
                        )}
                        <Posts myPosts isSidebarActive={isSidebarActive} user={profileData} setCurrentPostId={setCurrentPostId} />
                    </>
                )}
            </Container>
        </ProfilePage>
    )
}

export default Profile;
