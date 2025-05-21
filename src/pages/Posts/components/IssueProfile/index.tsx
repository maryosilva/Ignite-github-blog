import { useContext } from "react";
import { IssueProfileContent, IssueActions, IssueTitle, IssueAbout, IssueProfileContainer } from "./styles";
import { IssuesContext } from "../../../../contexts/IssuesContext";
import { NavLink } from "react-router-dom";
import { formattedDate } from "../../../../utils/format";
import { ArrowSquareOut, Calendar, CaretLeft, ChatCircle } from "phosphor-react";
import githubIcon from '../../../../assets/github-icon.svg'

export function IssueProfile() {

    const { selectedIssue } = useContext(IssuesContext)

    return (
        <IssueProfileContainer>
            {selectedIssue.map(issue => (
                <IssueProfileContent>
                    <IssueActions>
                        <NavLink to={'/'}>
                            <CaretLeft size={16}/>
                            Voltar
                        </NavLink>

                        <NavLink to={issue.html_url}>
                            Ver no github
                            <ArrowSquareOut size={16}/>
                        </NavLink>

                    </IssueActions>

                    <IssueTitle>{issue.title}</IssueTitle>

                    <IssueAbout>
                        <NavLink to={issue.user.html_url}>
                            <img src={githubIcon} alt="" />
                            {issue.name}
                        </NavLink>

                        <span>
                            <Calendar size={18}/>
                            {formattedDate(issue.updated_at)}
                        </span>
                        <span>
                            <ChatCircle size={18}/>
                            {issue.comments}
                            <span>comentários</span>
                        </span>
                    </IssueAbout>

                </IssueProfileContent>
            ))}
        </IssueProfileContainer>
    )
}