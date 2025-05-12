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
                (comentario) => comentario.publication?._id === publicationId
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

            // Verificar que response.comentData existe y tiene la estructura esperada
            if (response.success && response.comentData && response.comentData.uid) {
                setComentarios((prevComentarios) => [
                    ...prevComentarios,
                    {
                        id: response.comentData.uid, // Ajusta según la estructura de tu API
                        author: response.comentData.author,
                        description: response.comentData.description,
                        publication: { _id: response.comentData.publication }, // Ajusta según la estructura de tu API
                    },
                ])
            } else {
                console.error("La respuesta de la API no tiene la estructura esperada:", response)
                toast.error("Error al agregar el comentario. Intenta nuevamente.")
            }

            setLoading(false)
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