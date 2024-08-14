import { api } from "@/lib/axios"

interface updateProfileBody {
    name: string
    description: string | null
}

export const updateProfile = async ({name, description}: updateProfileBody) => {
    await api.put('/profile', {
        name,
        description
    })
}