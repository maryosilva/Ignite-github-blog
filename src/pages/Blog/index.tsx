import { useEffect, useState } from "react";
import { Profile } from "../../components/Profile";
import { BlogContainer, BlogForm } from "./styles";
import { Issues } from "../../components/Issues";
import { getProfile } from "../../services/IssuesService";

interface UseRepos {
    public_repos: number
}

export function Blog() {

    const [countRepos, setCountRepos] = useState<UseRepos>();
    const [searchTerm, setSearchTerm] = useState<string>('')

    async function fetchRepos() {
        const response = await getProfile()
        setCountRepos(response)
    }

    useEffect(() => {

        fetchRepos()
    }, [])

    return (
        <BlogContainer>
            <Profile/>

            <BlogForm>
                <div>
                    <span>Publicações</span>
                    <span>{countRepos?.public_repos} publicações</span>
                </div>
                <form>
                    <input
                        type="text" 
                        placeholder="Buscar conteúdo" 
                        onChange={(e) => setSearchTerm(e.target.value)}
                     />
                </form>
            </BlogForm>

            <Issues searchTerm={searchTerm}/>

        </BlogContainer>
    )
}