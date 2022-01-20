import styled from 'styled-components'

export const Content = styled.button`
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background};
    padding: 0 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    &:not(:disable):hover {
        filter: brightness(0.9);
    }

    &:disable {
        opacity: 0.6;
        cursor: not-allowed;
    }

    &.purple {
        background: ${(props) => props.theme.colors.primary};
    }
`;