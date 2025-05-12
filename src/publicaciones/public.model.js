
import { Schema, model } from "mongoose"

const PublicSchema = new Schema({
    course: {
        type: String,
        required: [true, "Course is required"],
    },
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Coment",
        }
    ],
    status: {
        type: Boolean,
        default: true,
    }
},
{
    timestamps: true,
    versionKey: false,
})

PublicSchema.methods.toJSON = function () {
    const { __v, _id, ...publicData } = this.toObject()
    publicData.uid = _id
    return publicData
}

export default model("Public", PublicSchema)