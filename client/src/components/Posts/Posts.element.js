import styled from 'styled-components';

export const Grid = styled.div`
    padding: 0 ${({ isSidebarActive }) => (!isSidebarActive && "24rem")};
    padding-left: ${({ isSidebarActive }) => (isSidebarActive ? "40rem" : "32rem")};
    margin: 0;
    flex-flow: row nowrap;
    justify-content: flex-start;
    flex-direction: row;
    position: absolute;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        padding: 0;
        padding-left: 6rem;
    }
`