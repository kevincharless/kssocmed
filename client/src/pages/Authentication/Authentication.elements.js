import styled from 'styled-components';

export const Glass = styled.div`
    width: 28rem;
    height: 34rem;

    background: linear-gradient(107.56deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.16) 100%);
    backdrop-filter: blur(100px);

    border-radius: 40px;
    border: 4px solid;
    border-image-source: radial-gradient(100% 316.05% at 0% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%);

    padding: 3rem 0;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        background: linear-gradient(107.56deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.0) 0%);
        backdrop-filter: blur(0);
    }
`

export const AuthenticationTitle = styled.h3`
    width: 100%;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 1.6rem;

    color: #176D84;
    text-align: center;
`

export const AuthenticationRow = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    font-size: 0.8rem;

    color: #176D84;
`

export const AuthenticationDescription = styled.h5`
    width: 16rem;
    height: auto;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 0.8rem;
    text-align: center;

    color: #176D84;
`

export const InputSection = styled.form`
    height: 60%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const InputDiv = styled.div`
    margin-bottom: 10px;
    margin: 0.6rem 1rem;

    width: ${({half}) => (half ? '9rem' : '20rem')};
    height: 2rem;

    background: linear-gradient(107.56deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.16) 100%);
    backdrop-filter: blur(100px);

    border-radius: 40px;
    border: 2px solid;

    border-image-source: radial-gradient(100% 316.05% at 0% 0%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%);
    opacity: 0.5;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        height: 2.2rem;
    }
`

export const InputIcon = styled.div`
    font-size: 1.2rem;
    position: absolute;
    margin: 0.35rem 1rem;
    color: #176D84; 
    min-width: 50px; 
    opacity: 50%;
    z-index: 0;
    width: ${({half}) => (half ? '9rem' : '18rem')};
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        font-size: 1.2rem;
        width: ${({half}) => (half ? '8rem' : '18rem')};
    }
`

export const Input = styled.input`
    position: absolute;
    padding-left: 3rem;
    z-index: 1;
    width: ${({half}) => (half ? '8rem' : '17.5rem')};
    height: 1.8rem;

    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;

    color: #176D84;

    /* opacity: 0.5; */
    background: none;
    border: none;

    &::placeholder {
        color: #176D84;
        opacity: 0.7;
    }

    &:focus{
    outline: none;
}

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        width: ${({half}) => (half ? '8rem' : '17rem')};
        height: 2rem;
        font-size: 0.7rem;
        padding-left: 3rem;
    }
`
export const ErrorMessage = styled.p`
    color: #DC211A;
    font-weight: bold;
    padding-left: 12rem;
`

export const Button = styled.button`
    width: auto;
    height: 2rem;

    background-image: linear-gradient(270deg, #2af598 0%, #009efd 100%);
    border-radius: 80px;

    border: none;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 0.8rem;

    color: #FFFFFF;
    padding: 0 4rem;
    margin-top: 1rem;
    margin-bottom: 0.6rem;

    &:hover {
        cursor: pointer;
    }
`

export const ButtonGoogle = styled.button`
    width: auto;
    height: 2rem;

    background: #4285F4;
    border-radius: 80px;
    border: none;

    color: white;

    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;
    text-align: right;


    display: flex;
    align-items: center;
    padding-right: 1.5rem;
    margin: 1rem 0;

    &:hover {
        cursor: pointer;
    }
`

export const ButtonText = styled.button`
    font-weight: 700;

    background: none;
    border: none;

    color: #176D84;

    &:hover {
        cursor: pointer;
    }
`