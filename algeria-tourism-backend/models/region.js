import mongoose from "mongoose";

const regionSchema = new mongoose.Schema(
    {
        regionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Region",
        },
        name: { type: String, required: [true, "Name is required"] },
        description: { type: String, required: [true, "Description is required"] },
        picture: {
            type: String,
            default:
                "https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg",
        },

    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Region", regionSchema);
