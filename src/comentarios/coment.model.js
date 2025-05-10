import { Schema, model } from "mongoose"

const ComentSchema = new Schema({
    publication: {
        type: Schema.Types.ObjectId,
        ref: "Public",
        required: [true, "Publication is required"],
    },
    author: {
        type: String,
        required: [true, "Author is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: Boolean,
        default: true,
    }
},
{
    timestamps: true,
    versionKey: false,
})

ComentSchema.methods.toJSON = function () {
    const { __v, _id, ...comentData } = this.toObject()
    comentData.uid = _id
    return comentData
}

export default model("Coment", ComentSchema)