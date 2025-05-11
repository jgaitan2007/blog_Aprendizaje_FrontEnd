// filepath: c:\Users\alexa\OneDrive\Escritorio\jos\Blog-Front\src\shared\hooks\useComentarios.jsx
import { useEffect, useState } from "react"
import { 
    listComentario as listComentarioRequest,
    agregarComentario as agregarComentarioRequest
} from "../../services"
import { toast } from "react-hot-toast"

export const useComentarios = (publicationId) => {
    const [comentarios, setComentarios] = useState([])
    const [loading, setLoading] = useState(false)

    const listComentario = async () => {
        setLoading(true)
        try {
            const response = await listComentarioRequest(publicationId)
            const filteredComentarios = response.coments.filter(
                (comentario) => comentario.publication?._id === publicationId // Cambiado a _id
            )
            setComentarios(filteredComentarios)
            setLoading(false)
        } catch (error) {
            toast.error(error.message)
            setComentarios([])
            setLoading(false)
        }
    }

    const agregarComentario = async ({ publication, author, description }) => {
        setLoading(true)
        try {
            const response = await agregarComentarioRequest({ publication, author, description })
            toast.success(response.message)
            setLoading(false)
            listComentario()
        } catch (error) {
            toast.error(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (publicationId) {
            listComentario()
        }
    }, [publicationId])

    return {
        comentarios,
        loading,
        agregarComentario
    }
}