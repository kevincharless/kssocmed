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

export const Header = styled.div`
    display: grid;
    display: flex;
    grid-row: auto;
    padding: 1.2rem;
    align-items: center;
    justify-content: space-between;
    
`

export const Avatar = styled.div`
    display: flex;
    align-items: center;
`

export const AvatarPicture = styled.img`
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 80px;
    margin-right: 0.8rem;
    
    display: block;
`

export const AvatarName = styled.h3`
    font-style: normal;
    font-weight: 500;
    font-size: 0.9rem;
    text-align: center;

    display: block;
    color: #176D84;
`