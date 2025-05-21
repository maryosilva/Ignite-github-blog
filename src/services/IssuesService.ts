import { api } from "../lib/api"

interface Repo {
    full_name: string
}

export async function getRepos() {
    const response = await api.get('users/maryosilva/repos', {
            headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_ACCESS_TOKEN_GITHUB}`
        }
    })

    return response.data
}

export async function getAllIsues(repo: Repo) {
    const response = await api.get(`repos/${repo.full_name}/issues`, {
            headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_ACCESS_TOKEN_GITHUB}`
        }
    })

    return response.data
}

export async function getProfile() {
    const response = await api.get('users/maryosilva', {
            headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_ACCESS_TOKEN_GITHUB}`
            }
        })
    
    return response.data
    
}