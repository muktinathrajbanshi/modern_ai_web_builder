import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema(
  {
    name: { type: String, required: true, default: "Untitled Project" },
    description: { type: String, default: "" },
    files: {
      type: Schema.Types.Mixed,
      default: {},
    },
  },
  { timestamps: true },
);

export const User = mongoose.model("User", UserSchema);
