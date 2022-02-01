import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    z-index: 999;
`;
Overlay.displayName = 'Overlay';

export const Dialog = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: calc(100% - 144px);
    width: 590px;
    height: 362px;
    padding: 24px;
    background-color: #ffffff;
    border-radius: 8px;
`;
Dialog.displayName = 'Dialog';