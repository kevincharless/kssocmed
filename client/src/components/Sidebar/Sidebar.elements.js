import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Div = styled.div`
    width: ${({ isSidebarActive }) => (isSidebarActive ? '300px' : '60px')};
    padding: 0;
    margin: 0;
`

export const SidebarContainer = styled.div`
    width: ${({ isSidebarActive }) => (isSidebarActive ? '300px' : '60px')};
    height: 100vh;
    position: fixed;
    
    border-right: 4px solid rgba(255, 255, 255, 0);
    background: linear-gradient(107.56deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.16) 100%);
    backdrop-filter: blur(100px);


    @media only screen and (max-width: 960px) {
        /* For Mobile and Tablet: */
        position: fixed;
        z-index: 999;
        width: ${({ isSidebarActive }) => (isSidebarActive ? '100%' : '60px')};
    }
`

export const SidebarRow = styled.div`
    display: grid;
    grid-row: auto;
`

export const SidebarContent = styled.div`
    height: 85%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const IconHamburger = {
    textAlign: 'right',
    fontSize: '2rem',
    margin: '0.7rem',
    cursor: 'pointer',
    color: '#176D84',
}

export const IconLogout = {
    fontSize: '2rem',
    margin: '0.7rem',
    cursor: 'pointer',
    color: '#DC211A',
    opacity: '0.9'
}

export const Avatar = styled.img`
    width: ${({ isSidebarActive }) => (isSidebarActive ? '100px' : '30px')};
    height: ${({ isSidebarActive }) => (isSidebarActive ? '100px' : '30px')};
    border-radius: 80px;
    
    margin-left: auto;
    margin-right: auto;
`

export const AvatarTag = styled.div`
    width: ${({ isSidebarActive }) => (isSidebarActive ? '100px' : '30px')};
    height: ${({ isSidebarActive }) => (isSidebarActive ? '100px' : '30px')};
    border: 1px solid #176D84;
    border-radius: 80px;
    
    margin: auto;
    
    display: flex;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    text-align: center;
    text-transform: capitalize;

    display: ${({ isSidebarActive }) => (!isSidebarActive && 'none')};
    color: #176D84;
`

export const AvatarName = styled.h3`
    padding: 1rem;
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    text-align: center;
    height: 3rem;
    text-transform: capitalize;

    display: ${({ isSidebarActive }) => (!isSidebarActive && 'none')};
    color: #176D84;
`

export const AvatarDescription = styled.h5`
    font-style: normal;
    font-weight: normal;
    font-size: 0.75rem;
    text-align: center;
    height: 1.5rem;

    display: ${({ isSidebarActive }) => (!isSidebarActive && 'none')};
    color: #176D84;
`

export const ButtonGroup = styled.ul`
    margin-left: auto;
    margin-right: auto;
`

export const ButtonGroupList = styled.li`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    display: flex;
    align-items: center;

    color: #1FBBC9;

    padding-bottom: 1rem;
`

export const ButtonLink = styled(
    styled(Link)`
    display: flex;
    align-items: center;

    &:hover {
    text-decoration: none;
    }
`,
    'active'
    )`
    color: #1FBBC9;
    text-decoration: none;
`;

export const ButtonIcon = styled.img`
    width: 2rem;
    margin-right: ${({ isSidebarActive }) => (isSidebarActive && '1.2rem')};

    &:hover {
        cursor: pointer;
    }
`

export const ButtonText = styled.p`
    display: ${({ isSidebarActive }) => (!isSidebarActive && 'none')};

    &:hover {
        cursor: pointer;
    }
`

export const LogoutButton = styled.button`
    background: none;
    display: ${({ isSidebarActive }) => (!isSidebarActive && 'none')};
    
    text-decoration: inherit;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;

    color: #1FBBC9;
    margin: 0 5rem;
    padding: 0.3rem;

    border: 2px solid;
    border-image-slice: 1;
    border-radius: 8rem;
    border-image-source: linear-gradient(266.83deg, #1FFF84 0%, #1F85FF 100%) 0 round;

    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:hover {
        background: linear-gradient(266.83deg, #1FFF84 0%, #1F85FF 100%) 0 round;
        border: 2px solid  rgba(255,255,255,0.8);
        border-radius: 8rem;
        color:white;
    }
`