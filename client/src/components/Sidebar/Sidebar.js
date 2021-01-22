import React, { useState } from 'react'
import { SidebarContainer, SidebarRow, Avatar, AvatarName, AvatarDescription } from './Sidebar.elements';
import { GiHamburgerMenu } from 'react-icons/gi'

import kevin from '../../assets/images/twibonhmps.jpg'

const Sidebar = () => {
    const [isSidebarActive, setIsSitebarActive] = useState(true);

    const toggleSitebar = () => {
        setIsSitebarActive(!isSidebarActive);
    }

    return (
        <SidebarContainer isSidebarActive={isSidebarActive}>
            <SidebarRow style={{ justifyContent: 'right' }}>
                <GiHamburgerMenu onClick={toggleSitebar} style={{ textAlign: 'right', fontSize: '3rem' }} />
            </SidebarRow>
            <SidebarRow>
                <Avatar src={kevin} isSidebarActive={isSidebarActive} />
                <AvatarName isSidebarActive={isSidebarActive}>Kevin Charles</AvatarName>
                <AvatarDescription isSidebarActive={isSidebarActive}>Full Stack Programmer</AvatarDescription>
            </SidebarRow>
        </SidebarContainer>
    )
}

export default Sidebar
