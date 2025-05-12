import React, { useState } from "react"
import { useComentarios } from "../shared/hooks"
import { useNavigate } from "react-router-dom" // Importar useNavigate
import "./AgregarComentario.css"

export const AgregarComentario = ({ publicationId }) => {
  const { agregarComentario } = useComentarios(publicationId)
  const navigate = useNavigate() // Inicializar useNavigate
  const [formData, setFormData] = useState({
    author: "",
    description: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.author || !formData.description) {
      alert("Por favor, completa todos los campos.")
      return
    }
    await agregarComentario({ ...formData, publication: publicationId })
    setFormData({ author: "", description: "" }) // Limpiar el formulario
    navigate("/") // Redirigir al listado de publicaciones
  }

  return (
    <form className="agregar-comentario-form" onSubmit={handleSubmit}>
      <h3>Agregar Comentario</h3>
      <div className="form-group">
        <label htmlFor="author">Autor:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Ingresa tu nombre"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Comentario:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Escribe tu comentario"
        />
      </div>
      <button type="submit" className="submit-button">
        Agregar Comentario
      </button>
    </form>
  )
}