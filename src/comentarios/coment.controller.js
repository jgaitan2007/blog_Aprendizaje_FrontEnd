import Coment from "./coment.model.js";
import Public from "../publicaciones/public.model.js";

export const getComents = async (req, res) => {
    try {
        const coments = await Coment.find({ status: true }).populate("publication", "title");
        return res.status(200).json({
            success: true,
            coments,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to fetch comments",
        });
    }
};

export const createComent = async (req, res) => {
    try {
        const data = req.body;

        const comentData = await Coment.create(data);

        await Public.findByIdAndUpdate(data.publication, { $push: { comments: comentData._id } });

        return res.status(201).json({
            success: true,
            comentData,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to create comment",
        });
    }
};

export const eliminateComent = async (req, res) => {
    try {
        const { uid } = req.params;
        const comentData = await Coment.findByIdAndUpdate(uid, { status: false }, { new: true });

        return res.status(200).json({
            success: true,
            comentData,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to delete comment",
        });
    }
};