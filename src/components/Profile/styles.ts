import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    padding: 2rem;
    margin-top: -5.62rem;
    border-radius: 10px;
    gap: 2rem;

    background-color: ${props => props.theme["gray-800"]};
    box-shadow: 0 0 0 2px ${props => props.theme["gray-800"]};

    img {
        width: 9.25rem;
        height: 9.25rem;
        border-radius: 8px;
    }
`

export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    gap: 1.5rem;
`

export const ProfileSelf = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.5rem;


    & > div {
        display: flex;
        justify-content: space-between;

        span:first-child {
            color: ${props => props.theme["gray-100"]};
            font-weight: bold;
            font-size: 1.93rem;
        }

        a {
            display: flex;
            align-items: start;
            gap: 0.5rem;
            font-weight: bold;
            font-size: 0.725rem;
            height: 1.5rem;
            text-decoration: none;
            text-transform: uppercase;
            color: ${props => props.theme.blue};
            cursor: pointer;
        }

        a:hover {
            border-bottom: 1px solid ${props => props.theme.blue};
        }

        svg {
            color: ${props => props.theme.blue};
        }
    }

    & > span {
        color: ${props => props.theme["gray-200"]};
    }
`

export const ProfileAbout = styled.div`

    display: flex;
    align-items: center;
    gap: 1.5rem;

    span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: ${props => props.theme["gray-300"]};

        svg {
            color: ${props => props.theme["gray-400"]};
        }
    }

    & > span {

        img {
            width: 1.125rem;
            height: 1.125rem;
        }

        a {
            text-decoration: none;
            color: ${props => props.theme["gray-300"]};
        }
    }
`
