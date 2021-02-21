import styled from 'styled-components';

export const LoadingSpinner = styled.div`
    border: 16px solid #1F85FF;
    border-radius: 50%;
    border-top: 16px solid #1F85FF;
    border-right: 16px solid rgba(31, 133, 255, 0.5);
    border-bottom: 16px solid #1FFF84;
    border-left: 16px solid rgba(31, 255, 132, 0.5);
    width: 3rem;
    height: 3rem;
    -webkit-animation: spin 1.5s linear infinite;
    animation: spin 1.5s linear infinite;

    @-webkit-keyframes spin {
        0% {
        -webkit-transform: rotate(0deg);
        }
        100% {
        -webkit-transform: rotate(360deg);
        }
    }
    @keyframes spin {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    }
`

export const LoadingText = styled.p`
    position: relative;
    left: -20%;
    color: #176D84;
`

export const Grid = styled.div`
    position: relative;
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`