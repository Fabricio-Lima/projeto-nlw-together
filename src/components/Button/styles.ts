import styled from 'styled-components'

export const Content = styled.button`
    height: 50px;
    border-radius: 8px;
    padding: 15px 25px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.background};

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }

    &.purple {
        background: ${(props) => props.theme.colors.primary};
    }

`;