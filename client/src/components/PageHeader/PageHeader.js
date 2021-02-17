import React from 'react';
import { Nav, Title, InputDiv, Input, InputIcon } from './PageHeaders.elements';
import { FaSearch } from 'react-icons/fa';

const PageHeader = ({ title, isSidebarActive}) => {
    return (
        <Nav isSidebarActive={isSidebarActive}>
            <Title>
                {title}
            </Title>
            <InputDiv>
                <Input type="text" name="search" placeholder="Search..." />
                <InputIcon>
                    <FaSearch />
                </InputIcon>
            </InputDiv>
        </Nav>
    )
}

export default PageHeader
