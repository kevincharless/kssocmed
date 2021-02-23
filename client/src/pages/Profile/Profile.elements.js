import styled from 'styled-components';

export const ProfilePage = styled.div`
    display: flex;
    width: 100%;
`

export const Container = styled.div`
    width: 100%;
`

export const Center = styled.div`
    position: absolute;
    left: 50%;
    top: 43%;
`

export const EditPostDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

    padding-bottom: 4rem;

    @media only screen and (max-width: 960px) {
        padding-bottom: 2.5rem;
    }
`