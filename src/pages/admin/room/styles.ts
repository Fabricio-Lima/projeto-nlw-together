import styled from 'styled-components'

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

export const QuestionList = styled.div`
    margin-top: 32px;
`;

export const ButtonsNavBar = styled.div`
    display: flex;    
    gap: 16px;

    > button {
        height: 40px;
    }
`;

export const ContentModal = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    svg path {
        stroke: ${( props ) => props.theme.colors.secundary};
    }
`;

export const WrapperModal = styled.div`
    display: grid;
    gap: 14px;

    > h1 {
        font-family: ${(props) => props.theme.fonts.secundaryFont};
        font-weight: bold;
        font-size: 24px;
        line-height: 34px;  
        color: #29292e;
    }

    > span {
        font-family: ${(props) => props.theme.fonts.primaryFont};
        font-size: 16px;
        line-height: 26px;
        color: #737380;
    }
`;

export const ButtonsModal = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

    > button {
        background: #dbdcdd;
        color: #737380;

        & + button {
            background: #e73f5d;
            color: ${(props) => props.theme.colors.background};
        }
    }
`;  