import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AddComment = styled.input`
    background: none;
    border: none;
    color: #176D84;
    font-size: 0.6rem;
    padding-left: 1rem;
    width: 100%;

    &::placeholder{
        color: #176D84;
        opacity: 0.8;
    }

    &:focus{
        outline: none;
    }

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        font-size: 0.4rem;
    }
`

export const Button = styled.button`
    background: none;
    border: none;
    color: #176D84;
    font-size: 0.6rem;
    font-weight: bold;
    padding-right: 1rem;

    &:focus {
        outline: none;
    }

    &:hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        font-size: 0.4rem;
    }
`