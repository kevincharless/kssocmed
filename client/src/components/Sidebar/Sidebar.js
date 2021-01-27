import React from 'react'
import { SidebarContainer, SidebarRow, Icon, Avatar, AvatarName, AvatarDescription } from './Sidebar.elements';
import { GiHamburgerMenu } from 'react-icons/gi'

import kevin from '../../assets/images/twibonhmps.jpg'

const Sidebar = ({ isSidebarActive, toggleSitebar }) => {
    return (
        <SidebarContainer isSidebarActive={isSidebarActive}>
            <SidebarRow style={{ justifyContent: 'right' }}>
                <GiHamburgerMenu onClick={toggleSitebar} style={Icon} />
            </SidebarRow>
            <SidebarRow style={{ padding: '6rem 0' }}>
                <Avatar src={kevin} isSidebarActive={isSidebarActive} />
                <AvatarName isSidebarActive={isSidebarActive}>Kevin Charles</AvatarName>
                <AvatarDescription isSidebarActive={isSidebarActive}>Full Stack Programmer</AvatarDescription>
            </SidebarRow>
        </SidebarContainer>
    )
}

export default Sidebar
