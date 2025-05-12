import Public from "./public.model.js"

export const getPublics = async (req, res) => {
    try {
        const publics = await Public.find({ status: true }).populate({ path: "comments", match: { status: true }, select: "author description date" })
        return res.status(200).json({
            success: true,
            publics
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const createPublic = async (req, res) => {
    try {
    const data = req.body

    const publicData = await Public.create(data)

    return res.status(201).json({
        success: true,
        publicData
    })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}