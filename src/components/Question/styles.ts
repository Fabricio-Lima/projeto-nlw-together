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

    &.highlighted {
        background: #f4f0ff;
        border: 1px solid ${( props ) => props.theme.colors.primary};

        > footer span {
            color: #29292e;
        }
    }
    
    &.answered {
        background: #dbdcdd;
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

export const Buttons = styled.div`

    > button {
        border: 0;
        background: transparent;
        cursor: pointer;
        transition: filter 0.2s;

        &.like-button {
            display: flex;
            align-items: flex-end;
            color: #737380;
            gap: 8px;

            &.liked {
                color: ${( props ) => props.theme.colors.primary};
                
                svg path {
                    stroke: ${( props ) => props.theme.colors.primary};
                }
            }
        }

        &:hover {
            filter: brightness(0.6);
        }
    }
`;
