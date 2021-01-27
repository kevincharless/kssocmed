import React from 'react'
import { FaSearch } from 'react-icons/fa';

import { Nav, Title, InputDiv, InputIcon, Input } from './PageGrid.element';

const PageGrid = ({ isSidebarActive }) => {
    return (
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
    )
}

export default PageGrid;
