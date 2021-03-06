import styled from 'styled-components';

export const CommentsSection = styled.div`
    height: 62%;

    overflow: hidden;
    max-height: 62%;
`

export const Section = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding-right: 17px; /* Increase/decrease this value for cross-browser compatibility */
    box-sizing: content-box; /* So the width will be 100% + 17px */
`