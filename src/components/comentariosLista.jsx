import React from "react"
import { useComentarios } from "../shared/hooks"
import "./comentariosLista.css"

export const ComentariosLista = ({ publicationId }) => {
  const { comentarios, loading } = useComentarios(publicationId)

  if (loading) {
    return <p>Cargando comentarios...</p>
  }

  // Filtrar comentarios en el componente
  const filteredComentarios = comentarios.filter(
    (comentario) => comentario.publication?._id === publicationId
  )

  if (!filteredComentarios.length) {
    return <p>No hay comentarios disponibles.</p>
  }

  return (
  <div className="comentarios-container">
    <h2 className="comentarios-title">Comentarios</h2>
    {filteredComentarios.map((comentario) => (
      <div className="comentario-item" key={comentario.uid}>
        <p><strong>{comentario.author}:</strong> {comentario.description}</p>
      </div>
    ))}
  </div>
  )
}