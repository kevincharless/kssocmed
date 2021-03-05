import React from 'react'
import { NewPostForm, PageHeader, Posts } from '../';

const PageGrid = ({ homePage, users, title, isSidebarActive, userProfile, currentPostId, setCurrentPostId }) => {
    const user = userProfile?.result;

    return (
        <div style={{ width: '100%' }}>
            <PageHeader title={title} users={users} isSidebarActive={isSidebarActive} />
            
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                {homePage && (
                    <NewPostForm user={user} currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />
                )}
                <div style={homePage &&{ marginTop: '4rem' }}>
                    {homePage ? (
                        <Posts homePage user={user} setCurrentPostId={setCurrentPostId} />
                    ) : (
                        <Posts explorePage user={user} setCurrentPostId={setCurrentPostId} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default PageGrid;
