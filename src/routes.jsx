import React from "react"
import { PublicacionesPagina } from "./pages/publicaciones"
import { ComentariosPagina } from "./pages/comentarios" 

export const routes = [
  { path: "/*", element: <PublicacionesPagina /> },
  { path: "/comentarios", element: <ComentariosPagina /> },
]