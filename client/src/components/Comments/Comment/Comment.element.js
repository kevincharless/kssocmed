import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    padding: 0.1rem 1rem;
`

export const Container = styled.div`
    width: 100%;
    font-size: 0.75rem;
    text-transform: capitalize;
    color: #176D84;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        font-size: 0.55rem;
    }
`

export const CommentCreatedAt = styled.p`
    color: #176D84;
    font-size: 0.5rem;
`

export const MoreDropDown = styled.div`
`

export const More = styled.div`
    display: ${({ isMoreActive }) => (isMoreActive ? 'block' : 'none')};
    position: absolute;
    background-color: #f9f9f9;
    min-width: 6rem;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        min-width: 4rem;
    }
`

export const MoreContent = styled.a`
    color: black;
    padding: 0.4rem;
    text-decoration: none;
    display: block;
    color: #176D84;
    font-size: 0.5rem;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        padding: 0.3rem;
        font-size: 0.1rem;
    }

    &:hover {
        background-color: ${({deleteButton}) => (deleteButton ? '#DC211A' : '#176D84')};
        color: white;
        cursor: pointer;
    }
`