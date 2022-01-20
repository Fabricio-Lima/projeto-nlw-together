import styled from 'styled-components'


export const Wrapper = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
`;

export const Aside = styled.aside`
    flex: 7;
    height: 100vh;

    background: ${( props ) => props.theme.colors.primary };
    color: ${( props ) => props.theme.colors.background };

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;

    > strong {
        font-family: ${(props) => props.theme.fonts.secundaryFont};
        line-height: 42px;
        margin-top: 16px;
        font-size: 36px;
        font-weight: 700;
    }

    > p {
        font-size: 24px;
        line-height: 32px;
        margin-top: 16px;
        color: ${( props ) => props.theme.colors.text};
    }
}
`;

export const Illustration = styled.div`
    max-width: 320px;    
`;

export const Section = styled.main`
    flex: 8;

    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    > img {
        align-items: center;
    }

    > h2 {
        font-size: 24px;
        margin: 64px 0 24px;
        font-family: ${(props) => props.theme.fonts.secundaryFont};
    }
`;

export const Forms = styled.form`
    > input {
        height: 50px;
        border-radius: 8px;
        padding: 0 16px;
        background: ${( props ) => props.theme.colors.background };
        border: 1px solid ${( props ) => props.theme.colors.textSecundary};
    }

    > button {
        margin-top: 16px;
        width: 100%;
    }

    > input {
        width: 100%;

        &:focus {
            outline: none;
            border: 2px solid ${( props ) => props.theme.colors.primary };
        }
    }

    > p {
        font-size: 14px;
        margin-top: 16px;
        color: #737388;

        > a {
            color: #e559f9;
            text-decoration: none;
        }
    }


`;


