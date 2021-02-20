import styled from "styled-components";

export const Nav = styled.div`
    padding: 3rem 5rem;
    padding-left: ${({ isSidebarActive }) => (isSidebarActive && '8rem')};
    margin: 0;
    flex-flow: row nowrap;
    flex-direction: row;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2rem;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        padding: 3rem 1rem 1rem 2rem;
    }
`

export const Title = styled.h3`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    z-index: 1;

    color: #176D84;
`

export const InputDiv = styled.div`
    margin-bottom: 10px;
    margin: 1rem 0;

    width: 16rem;
    height: 2.5rem;

    background: linear-gradient(107.56deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.16) 100%);
    backdrop-filter: blur(100px);

    border-radius: 40rem;
    border: 2px solid;

    border-image-source: radial-gradient(100% 316.05% at 0% 0%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%);
    opacity: 0.5;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        width: 8rem;
        height: 2rem;
    }
`

export const InputIcon = styled.div`
    font-size: 0.9rem;
    position: absolute;
    margin: 0.7rem 0;
    color: #176D84; 
    min-width: 50px; 
    opacity: 50%;
    z-index: 0;
    width: 14rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        font-size: 0.5rem;
        width: 6rem;
    }
`

export const Input = styled.input`
    position: absolute;
    padding-left: 1.5rem;
    z-index: 1;
    width: 14rem;
    height: 2.5rem;

    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;

    color: #176D84;

    /* opacity: 0.5; */
    background: none;
    border: none;

    &::placeholder {
        color: #176D84;
        opacity: 0.7;
    }

    &:focus {
        outline: none;
    }

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        width: 8rem;
        height: 2rem;
        font-size: 0.5rem;
        padding-left: 1rem;
    }
`