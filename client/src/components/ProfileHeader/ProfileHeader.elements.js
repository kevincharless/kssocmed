import styled from 'styled-components';

export const Container = styled.div`
    margin: 0;
    flex-flow: row nowrap;
    flex-direction: row;
    width: 100%;

    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        padding: 3rem 1rem 1rem 2rem;
    }

`

export const Card = styled.div`
    width: 50rem;
    background: linear-gradient(106.09deg, #FFFFFF 0%, rgba(255, 255, 255, 0.8) 100%);
    box-shadow: 9px 9px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        width: 15rem;
    }
`

export const ProfilePicture = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 80px;
    border: 1px solid white;

    position: relative;
    margin: 0 auto;
    margin-top: -5%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        width: 3rem;
        height: 3rem;
    }
`

export const ProfilePictureTag = styled.div`
    width: 5rem;
    height: 5rem;
    border: 1px solid #176D84;
    border-radius: 80px;
    position: relative;
    margin: 0 auto;
    margin-top: -5%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    text-align: center;
    text-transform: capitalize;

    color: #176D84;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        width: 3rem;
        height: 3rem;
        font-size: 1.5rem;
    }
`

export const CardHeader = styled.div`
    
`


export const ProfileName = styled.p`
    padding-top: 0.5rem;
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    text-align: center;
    text-transform: capitalize;

    color: #176D84;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        padding-top: 0.3rem;
        font-size: 0.6rem;
    }
`

export const ProfileBio = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 0.6rem;
    text-align: center;
    text-transform: capitalize;

    color: #1EF27E;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        font-size: 0.3rem;
    }
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    padding: 0.8rem 0;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        padding: 0.4rem 0;
    }
`

export const Col = styled.div`
    text-align: center;
`

export const Count = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;

    color: #176D84;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        font-size: 0.4rem;
    }
`

export const CountDescription = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;

    color: #176D84;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        font-size: 0.4rem;
    }
`