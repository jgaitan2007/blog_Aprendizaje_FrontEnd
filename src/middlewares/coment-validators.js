import { body, param } from "express-validator"
import { comentExists, publicExists } from "../helpers/db-validators.js"
import { validateField } from "./validate-field.js"
import { handleErrors } from "./handle-errors.js"

export const validateCreateComent = [
    body('publication').notEmpty().withMessage('The publication ID is required').isMongoId().withMessage('The publication ID is not valid').custom(publicExists),
    body('author').notEmpty().withMessage('The author is required'),
    body('description').notEmpty().withMessage('The description is required'),
    validateField,
    handleErrors
]

export const validateEliminateComent = [
    param('uid').notEmpty().withMessage('The comment ID is required'),
    param('uid').custom(comentExists),
    validateField,
    handleErrors
]