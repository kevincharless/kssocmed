import styled from 'styled-components';

export const Glass = styled.div`
    width: 768px;
    height: 864px;

    background: linear-gradient(107.56deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.16) 100%);
    backdrop-filter: blur(100px);

    border-radius: 40px;
    border: 4px solid;
    border-image-source: radial-gradient(100% 316.05% at 0% 0%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%);

    padding: 4rem 0;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        background: linear-gradient(107.56deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.16) 0%);
        backdrop-filter: blur(0);
    }
`

export const AuthenticationTitle = styled.h3`
    width: 100%;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;

    color: #176D84;
    text-align: center;
`

export const AuthenticationRow = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    color: #176D84;
`

export const AuthenticationDescription = styled.h5`
    width: 270px;
    height: 60px;
    left: 825px;
    top: 281px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;
    text-align: center;

    color: #176D84;
`

export const InputSection = styled.div`
    height: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const InputDiv = styled.div`
    margin-bottom: 10px;
    margin: 1rem 1rem;

    width: ${({half}) => (half ? '14rem' : '30rem')};
    height: 3.5rem;

    background: linear-gradient(107.56deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.16) 100%);
    backdrop-filter: blur(100px);

    border-radius: 40px;
    border: 2px solid;

    border-image-source: radial-gradient(100% 316.05% at 0% 0%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%);
    opacity: 0.5;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        width: ${({half}) => (half ? '9rem' : '20rem')};
        height: 3rem;
    }
`

export const InputIcon = styled.div`
    font-size: 2rem;
    position: absolute;
    margin: 0.7rem 1rem;
    color: #176D84; 
    min-width: 50px; 
    opacity: 50%;
    z-index: 0;
    width: ${({half}) => (half ? '12rem' : '28rem')};
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        font-size: 1.5rem;
        width: ${({half}) => (half ? '8rem' : '18rem')};
    }
`

export const Input = styled.input`
    position: absolute;
    padding-left: 3.5rem;
    z-index: 1;
    width: ${({half}) => (half ? '10rem' : '26rem')};
    height: 3.5rem;

    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;

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
        height: 3rem;
        font-size: 0.7rem;
        padding-left: 3rem;
    }
`

export const Button = styled.button`
    width: auto;
    height: 3rem;

    background-image: linear-gradient(270deg, #2af598 0%, #009efd 100%);
    border-radius: 80px;

    border: none;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;

    color: #FFFFFF;
    padding: 0 4rem;
    margin-bottom: 2rem;

    &:hover {
        cursor: pointer;
    }
`

export const ButtonGoogle = styled.button`
    width: auto;
    height: 3rem;

    background: #4285F4;
    border-radius: 80px;
    border: none;

    color: white;

    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
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