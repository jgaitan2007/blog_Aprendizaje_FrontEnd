// filepath: c:\Users\alexa\OneDrive\Escritorio\jos\Blog-Front\src\shared\hooks\usePublicaciones.jsx
import { useEffect, useState } from "react"
import { listPublicaciones as listPublicacionesRequest } from "../../services"
import { toast } from "react-hot-toast"

export const usePublicaciones = () => {
    const [publicaciones, setPublicaciones] = useState([])
    const [loading, setLoading] = useState(false)

    const listPublicaciones = async () => {
        setLoading(true)
        try {
            const response = await listPublicacionesRequest()
            setPublicaciones(Array.isArray(response.publics) ? response.publics : [])
            setLoading(false)
        } catch (error) {
            toast.error(error.message)
            setPublicaciones([])
            setLoading(false)
        }
    }

    useEffect(() => {
        listPublicaciones()
    }, [])

    return {
        publicaciones,
        loading,
    }
}