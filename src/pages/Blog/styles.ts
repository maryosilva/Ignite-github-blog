import styled from "styled-components";

export const BlogContainer = styled.div`
    width: 50%;
`

export const BlogForm = styled.div`

    display: flex;
    flex-direction: column;
    margin-top: 4.5rem;

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.75rem;

        span:first-child {
            color: ${props => props.theme["gray-200"]};
            font-weight: bold;
        }

        span:last-child {
            color: ${props => props.theme["gray-300"]};
        }

        
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;

        input {
            background-color: ${props => props.theme["gray-900"]};
            border: 1px solid ${props => props.theme["gray-500"]};
            border-radius: 6px;
            box-shadow: none;
            padding: 0.75rem 1rem;
            color: ${props => props.theme["gray-200"]};


            &:focus {
                border: 1px solid ${props => props.theme.blue};
            }

            &::placeholder {
                color: ${props => props.theme["gray-400"]};
            }
        }
    }

`