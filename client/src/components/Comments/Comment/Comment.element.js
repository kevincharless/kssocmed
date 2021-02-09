import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    font-size: 0.75rem;
    text-transform: capitalize;
    color: #176D84;
    padding: 0.1rem 1rem;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        font-size: 0.55rem;
    }
`