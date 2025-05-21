import { createContext, useEffect, useState, type ReactNode } from "react"
import { getAllIsues, getRepos } from "../services/IssuesService"

export interface User {
    name: string,
    avatar_url: string,
    email: string,
    followers: number,
    bio: string,
    html_url: string,
    company: string
}

export interface Issues {
    id: number
    title: string
    body: string
    updated_at: string
    html_url: string
    comments: string,
    user: User,
    name: string
}

interface Repo {
    full_name: string
}

interface IssuesContextType {
    issues: Issues[]
    onSelectedIssue: (id: number) => void
    selectedIssue: Issues[]
    onFetchUser: (data: User) => void,
    user: User | undefined
}

interface IssuesProviderProps {
    children: ReactNode
}


// eslint-disable-next-line react-refresh/only-export-components
export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({children}: IssuesProviderProps) {

    const [issues, setIssues] = useState<Issues[]>([])
    const [user, setUser] = useState<User>()
    
    const [selectedIssue, setSelectedIssue] = useState<Issues[]>([])

    async function fetchIssues() {
            try {
                
                const repos: Repo[] = await getRepos()
                const allIssues: Issues[] = []

                for(const repo of repos) {
                       try {
                         const response = await getAllIsues(repo)
                         allIssues.push(...response)
                         
                       } catch (error) {
                        console.error('Error fetching issues for repo', error)
                       }
                }
    
                setIssues(allIssues)
    
            } catch (error) {
                console.error('Error na requisição: ',error)
            }    
    }

    useEffect(() => {
        fetchIssues()
    }, [])

    function onFetchUser(data: User) {
        setUser(data)
    }

    function onSelectedIssue(id: number) {
        const filterIssue = issues.map(issue => {
            if(issue.id === id) {
                return {...issue, name: user?.name as string}
            } else {
                return {...issue}
            }
        })

        setSelectedIssue(filterIssue.filter(issue => issue.id === id))
        
    }

    return (
        <IssuesContext.Provider value=
        {{
            issues, 
            onSelectedIssue, 
            selectedIssue, 
            onFetchUser,
            user,
        }}>
            {children}
        </IssuesContext.Provider>
    )
}