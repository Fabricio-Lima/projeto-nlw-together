import styled from 'styled-components'

export const Content = styled.button`
    height: 50px;
    border-radius: 8px;
    padding: 15px 25px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.background};
    background: ${(props) => props.theme.colors.primary};

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    &:not(:disabled):hover {
        filter: brightness(0.9);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    &.outlined {
        background: ${( props ) => props.theme.colors.background}
        border: 1px solid ${( props ) => props.theme.colors.primary}
        color: ${( props ) => props.theme.colors.primary}
    }

`;