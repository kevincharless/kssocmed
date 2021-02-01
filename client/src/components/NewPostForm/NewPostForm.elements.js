import styled from 'styled-components';

export const Container = styled.div`
    width: 26rem;
    margin-bottom: 3rem;
    position: absolute;
    display: flex;
    flex-direction: row;
    z-index: 999;
`

export const Avatar = styled.img`
    width: ${({ isSidebarActive }) => (isSidebarActive ? '100px' : '30px')};
    height: ${({ isSidebarActive }) => (isSidebarActive ? '100px' : '30px')};
    border-radius: 80px;
    
`

export const AvatarTag = styled.div`
    width: ${({ isSidebarActive }) => (isSidebarActive ? '100px' : '30px')};
    height: ${({ isSidebarActive }) => (isSidebarActive ? '100px' : '30px')};
    border: 1px solid #176D84;
    border-radius: 80px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    text-align: center;
    text-transform: capitalize;

    display: ${({ isSidebarActive }) => (!isSidebarActive && 'none')};
    color: #176D84;
`

export const Input = styled.textarea`
    width: 100%;
    height: 2rem;

    margin-left: 1rem;
    padding: 0.5rem 1rem;

    resize: none;
    overflow: hidden;

    background: linear-gradient(107.56deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.16) 100%);
    backdrop-filter: blur(100px);

    border-radius: 40px;

    border-image-source: radial-gradient(100% 316.05% at 0% 0%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%);
    opacity: 0.8;
    
    &::placeholder {
        color: #176D84;
        opacity: 0.7;
        font-size: 0.6rem;
    }

    &:focus{
        outline: none;
        height: 4rem;
        border-radius: 15px;
        overflow-y: scroll;
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
`