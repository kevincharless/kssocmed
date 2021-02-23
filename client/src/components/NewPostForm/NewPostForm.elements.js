import styled from 'styled-components';

export const Container = styled.form`
    width: 26rem;
    margin-bottom: 3rem;
    position: absolute;
    z-index: 2;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        height: 1.6rem;
        width: 16rem;
    }
`

export const Avatar = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 80px;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        width: 1.6rem;
        height: 1.6rem;
    }
    
`

export const AvatarTag = styled.div`
    width: 2rem;
    height: 2rem;
    border: 1px solid #176D84;
    border-radius: 80px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem;

    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    text-align: center;
    text-transform: capitalize;

    color: #176D84;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        width: 0.8rem;
        height: 0.8rem;
        padding: 0.8rem;
    }
`

export const Input = styled.textarea`
    color: #176D84;

    width: 100%;
    height: 2rem;

    margin-left: 1rem;
    padding: 0.5rem 1rem;

    resize: none;
    overflow: hidden;
    font-size: 0.6rem;

    background: linear-gradient(107.56deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.16) 100%);
    backdrop-filter: blur(100px);

    border-radius: 40px;

    border-image-source: radial-gradient(100% 316.05% at 0% 0%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%);
    opacity: 0.9;
    
    &::placeholder {
        color: #176D84;
        opacity: 0.7;
    }

    &:focus{
        outline: none;
        height: 4rem;
        border-radius: 15px;
        overflow-y: scroll;
    }

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        height: 1.6rem;
        &::placeholder {
            font-size: 0.4rem;
        }
    }
`
export const CancelEditButton = styled.div`
    display: flex;
    align-items: center;

    color: #DC211A;
    font-size: 1rem;

    position: absolute;
    height: 2rem;
    margin-left: 17.5rem;
    
    &:hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        font-size: 0.6rem;
        height: 1.6rem;    
        margin-left: 9.5rem;
    }
`

export const CancelPopOver = styled.div`
    display: ${({ isPopOverActive }) => (isPopOverActive ? 'block' : 'none')};
    position: absolute;
    
    background: linear-gradient(107.56deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.16) 100%);
    backdrop-filter: blur(100px);
    border-radius: 40px;
    border-image-source: radial-gradient(100% 316.05% at 0% 0%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%);
    opacity: 0.9;

    color: #176D84;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 10;
    font-size: 0.6rem;
    padding: 0.1rem 0.3rem;
    margin-top: -0.8rem;
    margin-left: 70%;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
    font-size: 0.3rem;
    padding: 0.1rem 0.3rem;
    margin-top: -0.6rem;
    margin-left: 60%;
    }
`

export const AddImage = styled.img`
    display: flex;
    height: 2rem;
    width: 1.2rem;
    position: absolute;
    margin-left: 19rem;
    
    &:hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        height: 1.6rem;    
        width: 1rem;
        margin-left: 10.5rem;
    }
`

export const AddImageEvent = styled.div`
    border: none;
    height: 2rem;
    margin-left: 19rem;
    position: absolute;
    opacity: 0;
    overflow: hidden;
    width: 1.2rem;
    cursor: pointer;

    &:hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        height: 1.6rem;
        width: 1rem;
        margin-left: 10.5rem;
    }
`

export const Button = styled.button`
    width: 6rem;
    height: 2rem;
    background: linear-gradient(266.83deg, #1FFF84 0%, #1F85FF 100%) 0 round;
    border: none;
    border-radius: 8rem;
    color:white;

    margin-left: 1rem;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        height: 1.6rem;
        font-size: 0.4rem;
    }
`