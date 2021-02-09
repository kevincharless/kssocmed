import styled from 'styled-components';

export const Card = styled.div`
    width: 26rem;

    margin-bottom: 3rem;
    padding-bottom: 0.5rem;

    background: linear-gradient(106.09deg, #FFFFFF 0%, rgba(255, 255, 255, 0.8) 100%);
    box-shadow: 9px 9px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        width: 15rem;
    }
`

export const Header = styled.div`
    display: grid;
    display: flex;
    grid-row: auto;
    padding: 1rem;
    align-items: center;
    justify-content: space-between;
    
`

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
    min-width: 10rem;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        min-width: 5rem;
    }
`

export const MoreContent = styled.a`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    color: #176D84;
    font-size: 0.75rem;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        padding: 0.3rem 0.5rem;
        font-size: 0.5rem;
    }

    &:hover {
        background-color: ${({deleteButton}) => (deleteButton ? '#DC211A' : '#176D84')};
        color: white;
        cursor: pointer;
    }
`

export const PostContentPicture = styled.div`
    max-width: auto;
    height: auto;
    background-color: #176D84;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PostPicture = styled.img`
    width: auto;
    height: 16rem;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        height: 8rem;
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