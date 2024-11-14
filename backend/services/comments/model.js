import { Schema, model } from "mongoose";

import Blog from "../blogs/model.js";

const commentsSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Author",
    },
    blog: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
    },
  },
  { collection: "comments" }
);

commentsSchema.pre("findOneAndDelete", async function (next) {
  const commentToDelete = await this.model.findOne(this.getFilter());

  if (commentToDelete) {
    const blogId = commentToDelete.blog;
    const commentId = commentToDelete._id;

    // Remove the reference from the blog's comments array
    await Blog.findByIdAndUpdate(blogId, {
      $pull: { comments: { _id: commentId } },
    });
  }

  next();
});
export default model("Comments", commentsSchema);
