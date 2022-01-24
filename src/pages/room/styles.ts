import styled from 'styled-components'

export const Section = styled.div``;

export const Header = styled.header`
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Wrapper = styled.main`
    max-width: 800px;
    margin: 0 auto;
`;

export const Container = styled.div`
    margin: 32px 0 24px;
    display: flex;
    align-items: center;

    > h1 {
        font-family: ${(props) => props.theme.fonts.secundaryFont};
        font-size: 24px;
        color: #29292e;
    }

    > span {
        margin-left: 16px;
        background: #e559f9;
        border-radius: 9999px;
        padding: 8px 16px;
        color: ${( props ) => props.theme.colors.background};
        font-weight: 500;
        font-size: 14px;
    }
`;

export const Forms = styled.form`
    > textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background: #fefefe;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-width: 130px;
    }
`;

export const FooterForm = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;

    > span {
        font-size: 14px;
        color: #737380;
        font-weight: 500;

        > button {
            background: transparent;
            border: 0;
            color: ${( props ) => props.theme.colors.primary};
            text-decoration: underline;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
        }
    }

`;