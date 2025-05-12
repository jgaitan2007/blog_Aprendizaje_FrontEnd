import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi, { serve } from 'swagger-ui-express'

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API documentation for the project',
            contact: {
                name: '',
                email: ''
            }
            },
            servers: [
                {
                    url: 'http://127.0.0.1:3000/BlogDeAprendizaje/v1',
                }
            ]
        },
        apis: [
            "./src/comentarios/coment.routes.js",
            "./src/publicaciones/public.routes.js"
        ]
    };

    const swaggerDocs = swaggerJsDoc(options)

    export { swaggerDocs, swaggerUi }