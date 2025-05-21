import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 18rem;
    padding: 1.87rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${props => props.theme["gray-700"]};
`

export const LogoHeader = styled.img`

    width: 9.25rem;
    height: 6.12rem;
    object-fit: cover;
    margin-top: -2.87rem;

`