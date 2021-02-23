import styled from 'styled-components';

export const Line = styled.hr`

    opacity: 0.2;
    margin: 0.3rem 0;
`

export const Container = styled.form`
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

export const CancleEditButton = styled.button`
    background: none;
    border: none;
    color: #DC211A;
    font-size: 0.4rem;
    font-weight: bold;
    padding-right: 1rem;

    width: 4rem;

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