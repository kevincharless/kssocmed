import React from 'react'
import { NewPostForm, PageHeader, Posts } from '../';

const PageGrid = ({ title, isSidebarActive, userProfile, currentPostId, setCurrentPostId }) => {
    const user = userProfile?.result;

    return (
        <div style={{ width: '100%' }}>
            <PageHeader title={title} isSidebarActive={isSidebarActive} />
            
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <NewPostForm user={user} currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />
                <Posts user={user} setCurrentPostId={setCurrentPostId} />
            </div>
        </div>
    )
}

export default PageGrid;
