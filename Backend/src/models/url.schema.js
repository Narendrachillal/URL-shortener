import mongoose from "mongoose";

const urlschema = new mongoose.Schema(
  {
    Originalurl: {
      type: String,
      required: true,
    },
    shortID: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Url = mongoose.model("url", urlschema);
