import React from 'react'
import { FaSearch } from 'react-icons/fa';

import NewPostForm from '../NewPostForm/NewPostForm';
import Posts from '../Posts/Posts';
import { Nav, Title, InputDiv, InputIcon, Input } from './PageGrid.element';

const PageGrid = ({ isSidebarActive, userProfile }) => {
    const user = userProfile.result;

    return (
        <div style={{ width: '100%' }}>
            <Nav isSidebarActive={isSidebarActive}>
                <Title>
                    Home
                </Title>
                <InputDiv>
                    <Input type="text" name="search" placeholder="Search..." />
                    <InputIcon>
                        <FaSearch />
                    </InputIcon>
                </InputDiv>
            </Nav>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <NewPostForm user={user} />
                <Posts />
            </div>
        </div>
    )
}

export default PageGrid;
