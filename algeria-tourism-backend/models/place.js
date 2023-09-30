/*
  This model is used to store the places.
*/
import mongoose from "mongoose";

const placeSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    description: { type: String, required: [true, "Description is required"] },
    type: {
      type: String,
      enum: ["Hotel", "Restaurant", "Museum", "Park", "Beach", "Tourist-Tour"],
      required: [true, "Type is required"],
    },
    picture: {
      type: String,
      default:
        "https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg",
    },
    gallery: [
      {
        type: String,
        default:
          "https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg",
      },
    ],
    map_link: {
      type: String,
      default: "",
    },
    regionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Region",
    },
    stars: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Place", placeSchema);
