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

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        font-size: 1rem;
    }
`

export const InputDiv = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 5;

    margin-bottom: 10px;
    margin: 1rem 0;

    width: 16rem;
    height: 2.5rem;

    backdrop-filter: blur(100px);

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        width: 8rem;
        height: 2rem;
    }
`

export const InputBackground = styled.div`
    width: 16rem;
    height: 2.5rem;

    background: linear-gradient(107.56deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.16) 100%);
    backdrop-filter: blur(100px);

    border-radius: 40rem;
    border: 2px solid;

    border-image-source: radial-gradient(100% 316.05% at 0% 0%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%);
    opacity: 0.5;

    position: absolute;
    z-index: 2;

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

export const SearchResult = styled.div`
    border: 2px solid;

    border-image-source: radial-gradient(100% 316.05% at 0% 0%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%);
    opacity: 1;

    display: ${({ isMoreActive }) => (isMoreActive ? 'block' : 'none')};
    position: absolute;
    background-color: rgba(249, 249, 249, 0.8);
    min-width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    margin-top: 2.5rem;
`

export const SearchResultContent = styled.div`
    color: black;
    padding: 0.5rem;
    text-decoration: none;
    display: flex;
    color: #176D84;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        padding: 0.4rem;
        font-size: 0.5rem;
    }

    &:hover {
        background-color:rgba(23, 109, 132, 1);
        color: white;
        cursor: pointer;
    }
`

export const UserImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 80px;
`

export const UserTag = styled.div`
    width: 30px;
    height: 30px;

    background-color: #176D84;

    border: 1px solid #f9f9f9;
    border-radius: 80px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: 500;
    font-size: 0.6rem;
    text-align: center;
    text-transform: capitalize;

    color: #f9f9f9;
`

export const UserInfo = styled.div`
    margin-left: 1rem;

    display: flex;
    flex-direction: column;

    text-transform: capitalize;
`

export const UserName = styled.p`
    display: flex;
    align-items: center;

    font-size: 0.75rem;
    font-weight: bold;
    text-transform: capitalize;
`

export const UserBio = styled.p`

    font-size: 0.6rem;
`