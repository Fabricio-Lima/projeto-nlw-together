import styled from 'styled-components'


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;

    > aside {
        flex: 7;

        background: #835afd;
        color: #FFF;

        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 120px 80px;
    }

    > main {
        flex: 8;
    }
`;
