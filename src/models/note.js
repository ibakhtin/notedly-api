import { model, Schema } from "mongoose";

const noteSchema = new Schema(
  {
    content: {
      type: String,
      required: true
    },

    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },

    favoriteCount: {
      type: Number,
      default: 0
    },

    favoritedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'  
      }
    ]
  },
  {
    timestamps: true
  }
);

export const Note = model('Note', noteSchema);
