import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Sidebar, PageHeader } from '../../components';
import { FaqPage, FaqContent, FaqContentDiv, FaqContentTitle, FaqContentDescription } from './Faq.elements';

const Faq = ({ userProfile, isSidebarActive, toggleSitebar }) => {
    const history = useHistory();
    const clearUserProfile = () => localStorage.clear('profile');
    const faqContent = [
        {
            title: "How to Create Post ?",
            Description: "it's easy to create post in this app. go to home page, and put what do you think in the form. you also can put image to make your friend know what are you doing."
        },
        {
            title: "How to Edit Post ?",
            Description: "if you thing, you make some mistake in your post. you can edit it, by click the more button on right top of your post card, and click edit post. and you can edit the post on the same place where you make it."
        },
        {
            title: "How to Delete Post ?",
            Description: "if you thing, you make a fool thing. you can delete it, by click the more button on right top of your post card, and click delete post. then confirm to delete post."
        },
        {
            title: "How to Edit Profile ?",
            Description: "it's easy to edit your profile in this app. go to profile page, and click the edit profile. you can edit name, bio, and your profile picture."
        }
    ]

    useEffect(() => {
        if (!userProfile) history.push('/auth');
    }, [userProfile, history]);

    return (
        <FaqPage> 
            <Sidebar isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} userProfile={userProfile} clearUserProfile={clearUserProfile} />
            <PageHeader noSearch title="Frequently Asked Questions" />
            <FaqContent isSidebarActive={isSidebarActive}>
                {faqContent.map(faqContent => 
                    <FaqContentDiv>
                        <FaqContentTitle>{faqContent.title}</FaqContentTitle>
                        <FaqContentDescription>{faqContent.Description}</FaqContentDescription>
                    </FaqContentDiv>  
                )}
            </FaqContent>
        </FaqPage>
    )
}

export default Faq
