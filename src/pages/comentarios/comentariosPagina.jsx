import React from "react"
import { ComentariosLista } from "../../components"
import { AgregarComentario } from "../../components/AgregarComentario"
import { useLocation } from "react-router-dom"

export const ComentariosPagina = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const publicationId = queryParams.get("publicationId")

  return (
    <div className="comentarios-pagina">
      <h2>Comentarios</h2>
      <ComentariosLista publicationId={publicationId} />
      <AgregarComentario publicationId={publicationId} />
    </div>
  )
}