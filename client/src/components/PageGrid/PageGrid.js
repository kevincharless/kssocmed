import React from 'react'
import { FaSearch } from 'react-icons/fa';

import { Grid, Header, Title, InputDiv, InputIcon, Input, Content } from './PageGrid.element';

const PageGrid = ({ isSidebarActive }) => {
    return (
        <Grid isSidebarActive={isSidebarActive}>
            <Header>
                <Title>
                    Home
                </Title>
                <InputDiv>
                    <Input type="text" name="search" placeholder="Search..." />
                    <InputIcon>
                        <FaSearch />
                    </InputIcon>
                </InputDiv>
            </Header>
            <Content>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi alias odit amet eos illo, natus aspernatur ratione eveniet, beatae velit. Mollitia, id vel recusandae porro unde repellendus at quos.
            </Content>
        </Grid>
    )
}

export default PageGrid;
