import { Router } from "express"
import { getComents, createComent, eliminateComent } from "./coment.controller.js"
import { validateCreateComent, validateEliminateComent } from "../middlewares/coment-validators.js"

const router = Router()

router.get("/ListarComentarios", getComents)
router.post("/CrearComentario", validateCreateComent, createComent)
router.delete("/EliminarComentario/:uid", validateEliminateComent, eliminateComent)

export default router