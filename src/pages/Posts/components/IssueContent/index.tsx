import { useContext } from "react"
import { IssuesContext } from "../../../../contexts/IssuesContext"
import { IssueBody, IssueContainer } from "./styles"

export function IssueContent() {

    const { selectedIssue } = useContext(IssuesContext)

    return (
        <IssueContainer>
            {selectedIssue.map(issue => (
                <IssueBody>
                    {issue.body}
                </IssueBody>
            ))}
        </IssueContainer>
    )
}