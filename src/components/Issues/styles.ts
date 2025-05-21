import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const IssuesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
`

export const IssueCard = styled(NavLink)`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    text-decoration: none;
    color: ${props => props.theme["gray-100"]};

    background-color: ${props => props.theme["gray-600"]};
    padding: 2rem;
    border-radius: 10px;
    border: 1px solid transparent;

    &:hover {
        border: 1px solid ${props => props.theme["gray-400"]};
        transition: border 0.2s;
    }
`

export const IssueHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 1rem;
    span:first-child {
        font-weight: bold;
        font-size: 1.125rem;
    }

    span:last-child {
        font-size: 0.875rem;
        color: ${props => props.theme["gray-300"]};
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`

export const IssueContent = styled.p`

    color: ${props => props.theme["gray-200"]};

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
            line-clamp: 4; 
    -webkit-box-orient: vertical;
`

export const IssueNotFound = styled.div`
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;

    color: ${props => props.theme["gray-200"]};
`