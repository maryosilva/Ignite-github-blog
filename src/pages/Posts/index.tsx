import { PostContainer } from "./styles";
import { IssueProfile } from "./components/IssueProfile";
import { IssueContent } from "./components/IssueContent";


export function Posts() {

    return (
        <PostContainer>
            <IssueProfile/>
            <IssueContent/>
        </PostContainer>
    )
}