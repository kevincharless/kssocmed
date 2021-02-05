import styled from 'styled-components';

export const ModalDiv = styled.div`
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
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

/* Modal Content */
export const ModalContent = styled.div`
    position: relative;
    margin: auto;
    padding-top: 2rem;
    width: 20rem;
    height: 20rem;
    
    top: 10%;

    background: linear-gradient(107.56deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.16) 100%);
    backdrop-filter: blur(40px);

    border-radius: 40px;
    border: 4px solid;
    border-image-source: radial-gradient(100% 316.05% at 0% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%);

    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.5s;
    animation-name: animatetop;
    animation-duration: 0.5s;

    @-webkit-keyframes animatetop {
        from {top:-10%; opacity:0} 
        to {top:10%; opacity:1}
    }

    @keyframes animatetop {
        from {top:-10%; opacity:0}
        to {top:10%; opacity:1}
    }
`

export const ModalHeader = styled.div`
    color: #DC211A;
    opacity: 0.9;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0;
    padding: 0;
`
export const DangerIcon = styled.img`
    width: 20%;
`

export const Title = styled.h2`
    text-transform: capitalize;
    padding: 0.5rem;
    text-align: center;
`

export const Description = styled.p`
    color: white;
    text-transform: capitalize;
    padding: 0.5rem;
    text-align: center;
    opacity: 1;
`

export const ButtonGroup = styled.div`
    position: absolute;
    width: 90%;
    height: 9rem;
    display: flex;
    align-items: flex-end;
    padding: 1rem;

`

export const Button = styled.button`
    background: none;
    
    text-decoration: inherit;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;

    color: #176D84;
    margin: 0.8rem;
    width: 100%;
    height: 1.6rem;
    opacity: 0.8;

    border: 1px solid;
    border-image-slice: 1;
    border-radius: 8rem;
    border-image-source: linear-gradient(266.83deg, #1FFF84 0%, #1F85FF 100%) 0 round;

    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:hover {
        background: linear-gradient(266.83deg, #1FFF84 0%, #1F85FF 100%) 0 round;
        border: 1px solid  rgba(255,255,255,0.6);
        border-radius: 8rem;
        color:white;
        opacity: 1;
    }
`