import Coment from '../comentarios/coment.model.js'
import Public from '../publicaciones/public.model.js'

export const comentExists = async (uid = " ") => {
    const existe = await Coment.findById(uid)
    if (!existe) {
        throw new Error('The comment with the provided ID does not exist.');
    }
}

export const publicExists = async (uid = " ") => {
    const existe = await Public.findById(uid)
    if (!existe) {
        throw new Error('The publication with the provided ID does not exist.');
    }
}
