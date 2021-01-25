import styled from 'styled-components';

export const SidebarContainer = styled.div`
    position: absolute;
    width: ${({ isSidebarActive }) => (isSidebarActive ? '300px' : '80px')};
    height: 100%;
    left: 0;
    top: 0;
    
    border-right: 4px solid rgba(255, 255, 255, 0);
    background: linear-gradient(107.56deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.16) 100%);
    backdrop-filter: blur(100px);


@media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
    width: 80px;

    &::active {
        width: 100%;
    }
}
`

export const SidebarRow = styled.div`
    display: grid;
    grid-row: auto;
`

export const Avatar = styled.img`
    width: 125px;
    height: 125px;
    border-radius: 80px;
    
    display: ${({ isSidebarActive }) => (isSidebarActive ? 'block' : 'none')};
    margin-left: auto;
    margin-right: auto;
`

export const AvatarName = styled.h3`
    padding: 1rem;
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    text-align: center;
    height: 3rem;

    display: ${({ isSidebarActive }) => (isSidebarActive ? 'block' : 'none')};
    color: #176D84;
`

export const AvatarDescription = styled.h5`
    font-style: normal;
    font-weight: normal;
    font-size: 0.75rem;
    text-align: center;
    height: 1.5rem;

    display: ${({ isSidebarActive }) => (isSidebarActive ? 'block' : 'none')};
    color: #176D84;
`