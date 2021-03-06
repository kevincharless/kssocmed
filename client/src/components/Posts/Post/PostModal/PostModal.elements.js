import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const ModalDiv = styled.div`
    display: ${({ isDetailActive }) => (isDetailActive ? 'block' : 'none')};
    position: fixed;
    z-index: 999;
    padding-top: 5rem;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(255,255,255);
    background-color: rgba(255,255,255,0.5);
`

export const CloseButton = styled.p`
    position: absolute;
    top: 3%;
    left: 96%;
    color: white;
`

/* Modal Content */
export const ModalContent = styled.div`
    display: flex;

    position: relative;
    margin: auto;
    top: -5%;

    width: 60vw;
    height: 80vh;

    background: linear-gradient(106.09deg, #FFFFFF 0%, rgba(255, 255, 255, 1) 100%);
    box-shadow: 9px 9px 10px rgba(0, 0, 0, 0.05);
    border-radius: 20px;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        top: 0%;
    }

    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.5s;
    animation-name: animatetop;
    animation-duration: 0.5s;

    @-webkit-keyframes animatetop {
        from {top:-15%; opacity:0} 
        to {top:-5%; opacity:1}
    }

    @keyframes animatetop {
        from {top:-15%; opacity:0}
        to {top:-5%; opacity:1}
    }
`

export const ModalImage = styled.div`
    width: 60%;
    max-width: auto;
    height: auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    width: auto;
    height: 20em;

    @media only screen and (max-width: 960px) {
        /* For Mobile and Tablet: */
            height: 10em;
        }
`   

export const Content = styled.div`
    width: ${({ image }) => (image ? '40%' : '100%')};
    height: 100%;
    
    border-left: 1px solid rgba(0,0,0, 0.2);
    border: ${({ image }) => (!image && 'none')};
`

export const Header = styled.div`
    display: grid;
    display: flex;
    grid-row: auto;
    padding: 1rem;
    align-items: center;
    justify-content: space-between;
    
`

export const Description = styled.div`
    padding-bottom: 0.5rem;
`

export const AvatarLink = styled(
    styled(Link)`
    display: flex;
    align-items: center;

    &:hover {
    cursor: pointer;
        text-decoration: none;
        }
    `,
        'active'
        )`
        color: #1FBBC9;
        text-decoration: none;
`;

export const Avatar = styled.div`
    display: flex;
    align-items: center;
`

export const AvatarPicture = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 80px;
    margin-right: 0.8rem;
    
    display: block;
`

export const AvatarTag = styled.div`
    width: 2rem;
    height: 2rem;
    border: 1px solid #176D84;
    border-radius: 80px;
    margin-right: 0.8rem;
    
    display: flex;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    text-align: center;
    text-transform: capitalize;

    color: #176D84;
`

export const AvatarName = styled.h3`
    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    text-align: center;
    text-transform: capitalize;

    display: block;
    color: #176D84;
`

export const MoreDropDown = styled.div`
    position: relative;
    display: inline-block;
`

export const More = styled.div`
    display: ${({ isMoreActive }) => (isMoreActive ? 'block' : 'none')};
    position: absolute;
    background-color: #f9f9f9;
    min-width: 8rem;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        min-width: 5rem;
    }
`

export const MoreContent = styled.a`
    color: black;
    padding: 0.5rem;
    text-decoration: none;
    display: block;
    color: #176D84;
    font-size: 0.75rem;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        padding: 0.4rem;
        font-size: 0.5rem;
    }

    &:hover {
        background-color: ${({deleteButton}) => (deleteButton ? '#DC211A' : '#176D84')};
        color: white;
        cursor: pointer;
    }
`

export const ButtonGroup = styled.div`
    width: 100%;
    padding: 0.3rem;
    padding-bottom: 0.1rem;
    padding-left: 1rem;
`

export const Button = styled.button`
    background: none;
    border: none;
    color: #176D84;
    font-size: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:focus {
        outline: none;
    }

    &:hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        font-size: 0.3rem;
    }
`

export const Caption = styled.div`
    width: 100%;
    font-size: ${({ captionOnly }) => (captionOnly ? '0.8rem' : '0.75rem')};
    text-transform: capitalize;
    color: #176D84;
    padding-left: 1rem;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        font-size: ${({ captionOnly }) => (captionOnly ? '0.6rem' : '0.55rem')};
    }
`

export const PostCreatedAt = styled.p`
    color: #176D84;
    font-size: 0.5rem;
    padding-left: 1rem;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        font-size: 0.3rem;
    }
`