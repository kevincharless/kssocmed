import styled from 'styled-components';

export const Container = styled.div`
    width: 60%;
    background: linear-gradient(106.09deg, #FFFFFF 0%, rgba(255, 255, 255, 0.8) 100%);
    box-shadow: 9px 9px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;

    position:relative;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    padding: 0.5rem 1.5rem;

    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    text-transform: capitalize;

    color: #176D84;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        width: 15rem;
        font-size: 0.5rem;
        padding: 0.3rem 0.8rem;
        margin-bottom: 1rem;
    }
`