import styled from 'styled-components';

export const Card = styled.div`
    width: 26rem;
    height: 28rem;
    margin-bottom: 3rem;

    background: linear-gradient(106.09deg, #FFFFFF 0%, rgba(255, 255, 255, 0.8) 100%);
    box-shadow: 9px 9px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        width: 15rem;
        height: 16rem;
    }
`