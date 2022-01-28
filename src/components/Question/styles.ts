import styled from 'styled-components'

export const Section = styled.div`
    background: #fefefe;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 24px;

    & + div {
        margin-top: 8px;
    }

    > p {
        color: #29292e;
    }
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;

    > span {
        margin-left: 8px;
        color: #737380;
        font-size: 14px;
    }
`;
