import React from "react"
import { useNavigate } from "react-router-dom"
import { usePublicaciones } from "../shared/hooks"
import "./publicLista.css"

export const PublicLista = () => {
  const { publicaciones, loading } = usePublicaciones()
  const navigate = useNavigate()

  if (loading) {
    return <p>Cargando publicaciones...</p>
  }

  if (!publicaciones.length) {
    return <p>No hay publicaciones disponibles.</p>
  }

  return (
    <div className="publicaciones-container">
      <h2 className="publicaciones-title">Publicaciones</h2>
      {publicaciones.map((publicacion) => (
        <div className="publicacion-item" key={publicacion.uid}>
          <h3>{publicacion.title}</h3>
          <p><strong>Curso/Categoría:</strong> {publicacion.course}</p>
          <p><strong>Descripción:</strong> {publicacion.description}</p>
          <p><strong>Fecha de Publicación:</strong> {publicacion.date}</p>
          <div>
            <strong>Comentarios:</strong>
            <ul>
              {publicacion.comments.map((comment, index) => (
                <li key={index}>{comment.author}: {comment.description}</li>
              ))}
            </ul>
          </div>
          <button onClick={() => navigate(`/comentarios?publicationId=${publicacion.uid}`)}>
            Añadir Comentario
          </button>
        </div>
      ))}
    </div>
  )
}