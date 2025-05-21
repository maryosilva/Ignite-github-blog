import {useContext, useEffect, useState } from "react"
import { IssueCard, IssueContent, IssueHeader, IssueNotFound, IssuesContainer } from "./styles"
import { IssuesContext, type Issues } from "../../contexts/IssuesContext"
import { formattedDate } from "../../utils/format"

interface FilterIssues {
    searchTerm: string
}

export function Issues({searchTerm}: FilterIssues) {

    const [filteredIssues, setFilteredIssues] = useState<Issues[]>([])

    const { issues, onSelectedIssue } = useContext(IssuesContext)

    useEffect(() => {
        setFilteredIssues(issues.filter(issue => {
            return issue.title.toLowerCase().includes(searchTerm.toLowerCase())
        }))
    }, [issues, searchTerm])

    function onClickSelectedIssue(id: number) {
        onSelectedIssue(id)
    }

    return (
        <IssuesContainer>
                {filteredIssues.length > 0 ? filteredIssues.map(issue => (
                    <IssueCard key={issue.id} to={'/posts'} onClick={() => onClickSelectedIssue(issue.id)}>
                        <IssueHeader>
                            <span>{issue.title}</span>
                            <span>
                                {formattedDate(issue.updated_at)}
                            </span>
                        </IssueHeader>
                    
                        <IssueContent>
                            {issue.body}
                        </IssueContent>
                    </IssueCard>
                )): <IssueNotFound>Nenhuma Issue encontrada</IssueNotFound>}
        </IssuesContainer>
    )
}