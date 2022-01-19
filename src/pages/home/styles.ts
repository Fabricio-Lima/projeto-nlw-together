import styled from 'styled-components'


export const Wrapper = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
`;

export const Aside = styled.aside`
    flex: 7;
    height: 100vh;

    background: #835afd;
    color: #FFF;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;

    > strong {
        font: 700 36px 'Poppins', sans-serif;
        line-height: 42px;
        margin-top: 16px;
    }

    > p {
        font-size: 24px;
        line-height: 32px;
        margin-top: 16px;
        color: #f8f8f8
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
`;

export const IconGoogle = styled.div`
    margin-right: 8px;
    margin-top: 5px;
`;

export const Button = styled.button`
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: #ea4335;
    color: #FFF;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
`;

export const Separator = styled.div`
    font-size: 14px;
    color: #a8a8b3;

    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
        content: '';
        flex: 1;
        height: 1px;
        background: #a8a8b3;
        margin-right: 16px;
    }

    &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: #a8a8b3;
        margin-left: 16px;
    }
`;

export const Forms = styled.form`
    > input {
        height: 50px;
        border-radius: 8px;
        padding: 0 16px;
        background: #FFF;
        border: 1px solid #a8a8b3;
    }

    > button {
        margin-top: 16px;
        width: 100%;
    }

    > input {
        width: 100%;

        &:focus {
            outline: none;
            border: 2px solid #835afd;
        }
    }
`;


