import { useContext, useEffect, useState } from "react";
import { ProfileAbout, ProfileContainer, ProfileContent, ProfileSelf } from "./styles";
import githubIcon from '../../assets/github-icon.svg'
import { ArrowSquareOut, Buildings, Users } from "phosphor-react";
import { IssuesContext, type User } from "../../contexts/IssuesContext";
import { getProfile } from "../../services/IssuesService";

export function Profile() {

    const [userInfo, setUserInfo] = useState<User | undefined>();

    const { onFetchUser } = useContext(IssuesContext)

    async function fetchProfile() {
        const response = await getProfile()
        setUserInfo(response)
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    onFetchUser(userInfo as User)

    return (
        <ProfileContainer>
            <img src={userInfo?.avatar_url} alt="" />

            <ProfileContent>
                <ProfileSelf>
                    <div>
                        <span>{userInfo?.name}</span>
                            <a href={userInfo?.html_url}>Github <ArrowSquareOut size={16}/></a>
                    </div>

                    <span>
                        {userInfo?.bio}
                    </span>
                </ProfileSelf>

                <ProfileAbout>
                    <span>
                        <img src={githubIcon} alt="" />
                        <a href={userInfo?.html_url}>maryosilva</a>
                    </span>
                    <span>
                        <Buildings size={18}/>
                        {userInfo?.company ? undefined : 'Rocketseat'}
                    </span>
                    <span>
                        <Users size={18}/>
                        {userInfo?.followers} seguidores
                    </span>
                </ProfileAbout>
            </ProfileContent>

        </ProfileContainer>
    )
}