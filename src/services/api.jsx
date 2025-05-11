// filepath: c:\Users\alexa\OneDrive\Escritorio\jos\Blog-Front\src\services\api.jsx
import axios from "axios"

const cliente = axios.create({
    baseURL: "http://127.0.0.1:3000/BlogDeAprendizaje/v1",
    timeout: 3000,
    httpsAgent: false,
});

export const listPublicaciones = async () => {
    const response = await cliente.get('/Publicaciones/ListarPublicaciones')
    return response.data;
}

export const listComentario = async (publicationId) => {
    const response = await cliente.get(`/Comentarios/ListarComentarios?publicationId=${publicationId}`)
    return response.data
}

export const agregarComentario = async (data) => {
    const response = await cliente.post('/Comentarios/CrearComentario', data)
    return response.data;
}