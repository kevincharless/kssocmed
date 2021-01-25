import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Poppins', sans-serif;
    }
`

    export const Row = styled.div`
        display: flex;
        height: 100vh;

        justify-content: center;
        align-items: center;
    `

export default GlobalStyle