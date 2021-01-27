import styled from "styled-components";

export const HomePage = styled.div`
    padding: 5rem 15rem;
    padding-left: ${({ isSidebarActive }) => (isSidebarActive && "35rem")};
    margin: 0;
    flex-flow: row nowrap;
    justify-content: flex-start;
    flex-direction: row;
    position: absolute;
`