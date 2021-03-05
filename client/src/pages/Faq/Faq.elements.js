import styled from "styled-components";

export const FaqPage = styled.div`
    display: flex;
    width: 100%;
    color: #176D84;
`

export const FaqContent = styled.div`
    width: 100%;
    position: absolute;
    padding-top: 8rem;
    padding-left: ${({ isSidebarActive }) => (isSidebarActive ? '19.7rem' : '8.5rem')};
`

export const FaqContentDiv = styled.div`
    padding-bottom: 2rem;
`

export const FaqContentTitle = styled.h2`
`

export const FaqContentDescription = styled.p`
    width: 75vw;
    text-transform: capitalize;
`