import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LOGOUT } from '../../redux/constants/actionTypes';
import decode from 'jwt-decode';

import Modal from '../Modal/Modal';
import { Div, SidebarContainer, SidebarRow, SidebarContent, IconHamburger, IconLogout, Avatar, AvatarTag, AvatarName, AvatarDescription, ButtonGroup, ButtonGroupList, ButtonLink, ButtonIcon, ButtonText, LogoutButton } from './Sidebar.elements';
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiLogOut } from 'react-icons/bi';

import home from '../../assets/images/home.svg';
import explore from '../../assets/images/explore.svg';
import profile from '../../assets/images/user.svg';
import faq from '../../assets/images/help.svg';

const Sidebar = ({ isSidebarActive, toggleSitebar, userProfile, clearUserProfile }) => {
    const user = userProfile?.result;
    const [isActive, setIsActive] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const logout = useCallback(
        () => {
            dispatch({ type: LOGOUT });
    
            clearUserProfile();
    
            history.push('/');
        }, [clearUserProfile, dispatch, history])

    useEffect(() => {
        const token = userProfile?.token;

        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <>
            <Div isSidebarActive={isSidebarActive}>
                <SidebarContainer isSidebarActive={isSidebarActive}>
                    <SidebarRow style={{ justifyContent: 'right' }}>
                        <GiHamburgerMenu onClick={toggleSitebar} style={IconHamburger} />
                    </SidebarRow>
                    <SidebarContent>
                        <SidebarRow style={{ padding: '2rem 0' }}>
                            {user?.imageUrl ? (
                                <Avatar src={user?.imageUrl} isSidebarActive={isSidebarActive} />
                            ) : (
                                <AvatarTag isSidebarActive={isSidebarActive}>{user?.name.split(' ').map(function(item){return item[0]}).join('')}</AvatarTag>
                            )}
                            <AvatarName isSidebarActive={isSidebarActive}>{user?.name}</AvatarName>
                            <AvatarDescription isSidebarActive={isSidebarActive}>Full Stack Programmer</AvatarDescription>
                        </SidebarRow>
                        <SidebarRow>
                            <ButtonGroup>
                                <ButtonGroupList>
                                    <ButtonLink to="/">
                                        <ButtonIcon src={home} isSidebarActive={isSidebarActive} />
                                        <ButtonText isSidebarActive={isSidebarActive}>Home</ButtonText>
                                    </ButtonLink>
                                </ButtonGroupList>
                                <ButtonGroupList isSidebarActive={isSidebarActive}>
                                    <ButtonIcon src={explore} isSidebarActive={isSidebarActive} />
                                    <ButtonText isSidebarActive={isSidebarActive}>Explore</ButtonText>
                                </ButtonGroupList>
                                <ButtonGroupList isSidebarActive={isSidebarActive}>
                                    <ButtonLink to="/profile">
                                        <ButtonIcon src={profile} isSidebarActive={isSidebarActive} />
                                        <ButtonText isSidebarActive={isSidebarActive}>Profile</ButtonText>
                                    </ButtonLink>
                                </ButtonGroupList>
                                <ButtonGroupList isSidebarActive={isSidebarActive}>
                                    <ButtonIcon src={faq} isSidebarActive={isSidebarActive} />
                                    <ButtonText isSidebarActive={isSidebarActive}>Faq</ButtonText>
                                </ButtonGroupList>
                            </ButtonGroup>
                        </SidebarRow>
                        <SidebarRow style={{ padding: '2rem 0' }}>
                            <LogoutButton isSidebarActive={isSidebarActive} onClick={() => setIsActive(true)}>Logout</LogoutButton>
                            {!isSidebarActive && <BiLogOut style={IconLogout} />}
                        </SidebarRow>
                    </SidebarContent>
                </SidebarContainer>
            </Div>
            <Modal 
                isActive={isActive}
                setIsActive={setIsActive}
                logout={logout}
                description="You want to logout ?"
            />
        </>
    )
}

export default Sidebar
