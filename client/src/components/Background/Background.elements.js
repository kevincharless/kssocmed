import styled from 'styled-components';

export const BackgroundDiv = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow:hidden;
    background-image: linear-gradient(270deg, #2af598 0%, #009efd 100%);
`

export const BackgroundEllipse1 = styled.div`
    position: absolute;
    width: 100vh;
    height: 100%;
    left: -14%;
    top: -26%;

    border-radius: 100%;
    background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
    filter: blur(200px);
`
export const BackgroundEllipse2 = styled.div`
    position: absolute;
    width: 100vh;
    height: 100%;
    left: 70%;
    top: 63%;

    border-radius: 100%;
    background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
    filter: blur(200px);
    transform: rotate(-180deg);
`

export const GlassEllipse1 = styled.div`
    position: absolute;
    width: 74vh;
    height: 74%;
    left: -12%;
    top: 54%;

    background: linear-gradient(107.56deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.16) 100%);
    backdrop-filter: blur(100px);

    border-radius: 100%;
    transform: rotate(90deg);

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        background: none;
        backdrop-filter: none;
    }
`

export const GlassEllipse2 = styled.div`
    position: absolute;
    width: 74vh;
    height: 74%;
    left: 70%;
    top: -28%;

    background: linear-gradient(107.56deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.16) 100%);
    backdrop-filter: blur(100px);

    border-radius: 100%;
    transform: rotate(-90deg);

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        background: none;
        backdrop-filter: none;
    }
`

export const Glass = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    background: linear-gradient(107.56deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.16) 100%);
    backdrop-filter: blur(100px);

    @media only screen and (max-width: 960px) {
    /* For Mobile and Tablet: */
        background: linear-gradient(107.56deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.16) 50%);
        backdrop-filter: blur(50px);
    }
`