import React from 'react';
import PageHeader from '../PageHeader/PageHeader';

const ProfileHeader = ({ title, isSidebarActive}) => {
    return (
        <>
            <PageHeader title={title} isSidebarActive={isSidebarActive} />
        </>
    )
}

export default ProfileHeader
