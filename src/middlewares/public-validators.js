import { body } from "express-validator"
import { validateField } from "./validate-field.js"
import { handleErrors } from "./handle-errors.js" // Cambiado de 'handle-error.js' a 'handle-errors.js'

export const validateCreatePublic = [
    body('course').notEmpty().withMessage('The course is required'),
    body('title').notEmpty().withMessage('The title is required'),
    body('description').notEmpty().withMessage('The description is required'),
    validateField,
    handleErrors 
]