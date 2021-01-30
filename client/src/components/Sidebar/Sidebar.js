import React from 'react'
import { Div, SidebarContainer, SidebarRow, SidebarContent, IconHamburger, IconLogout, Avatar, AvatarName, AvatarDescription, ButtonGroup, ButtonGroupList, ButtonIcon, ButtonText, LogoutButton } from './Sidebar.elements';
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiLogOut } from 'react-icons/bi';

import home from '../../assets/images/home.svg';
import explore from '../../assets/images/explore.svg';
import profile from '../../assets/images/user.svg';
import faq from '../../assets/images/help.svg';

import kevin from '../../assets/images/twibonhmps.jpg'

const Sidebar = ({ isSidebarActive, toggleSitebar }) => {
    return (
        <Div isSidebarActive={isSidebarActive}>
            <SidebarContainer isSidebarActive={isSidebarActive}>
                <SidebarRow style={{ justifyContent: 'right' }}>
                    <GiHamburgerMenu onClick={toggleSitebar} style={IconHamburger} />
                </SidebarRow>
                <SidebarContent>
                    <SidebarRow style={{ padding: '2rem 0' }}>
                        <Avatar src={kevin} isSidebarActive={isSidebarActive} />
                        <AvatarName isSidebarActive={isSidebarActive}>Kevin Charles</AvatarName>
                        <AvatarDescription isSidebarActive={isSidebarActive}>Full Stack Programmer</AvatarDescription>
                    </SidebarRow>
                    <SidebarRow>
                        <ButtonGroup>
                            <ButtonGroupList>
                                <ButtonIcon src={home} isSidebarActive={isSidebarActive} />
                                <ButtonText isSidebarActive={isSidebarActive}>Home</ButtonText>
                            </ButtonGroupList>
                            <ButtonGroupList isSidebarActive={isSidebarActive}>
                                <ButtonIcon src={explore} isSidebarActive={isSidebarActive} />
                                <ButtonText isSidebarActive={isSidebarActive}>Explore</ButtonText>
                            </ButtonGroupList>
                            <ButtonGroupList isSidebarActive={isSidebarActive}>
                                <ButtonIcon src={profile} isSidebarActive={isSidebarActive} />
                                <ButtonText isSidebarActive={isSidebarActive}>Profile</ButtonText>
                            </ButtonGroupList>
                            <ButtonGroupList isSidebarActive={isSidebarActive}>
                                <ButtonIcon src={faq} isSidebarActive={isSidebarActive} />
                                <ButtonText isSidebarActive={isSidebarActive}>Faq</ButtonText>
                            </ButtonGroupList>
                        </ButtonGroup>
                    </SidebarRow>
                    <SidebarRow style={{ padding: '2rem 0' }}>
                        <LogoutButton isSidebarActive={isSidebarActive}>Logout</LogoutButton>
                        {!isSidebarActive && <BiLogOut style={IconLogout} />}
                    </SidebarRow>
                </SidebarContent>
            </SidebarContainer>
        </Div>
    )
}

export default Sidebar
