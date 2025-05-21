import styled from "styled-components";

export const IssueProfileContainer = styled.div`
    background-color: ${props => props.theme["gray-800"]};
    margin-top: -4.25rem;
    border-radius: 10px;
`

export const IssueProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
`
export const IssueActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 1.25rem;
     
    a {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        text-decoration: none;
        color: ${props => props.theme.blue};
        text-transform: uppercase;
        font-size: 0.775rem;
        font-weight: bold;
        cursor: pointer;
        border: 1px solid transparent;
        padding-bottom: 0.2rem;
    }

        a:hover {
            border-bottom: 1px solid ${props => props.theme.blue};
        }
`

export const IssueTitle = styled.span`
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-size: 1.125rem;
`

export const IssueAbout = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    color: ${props => props.theme["gray-300"]};

    a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        color: ${props => props.theme["gray-300"]};
    }

    span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`