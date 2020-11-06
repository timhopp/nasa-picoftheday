import { IFavorite } from "../types/favorite"
import { model, Schema } from "mongoose"

const favoriteSchema: Schema = new Schema (
  {
    
    title: {
      type: String, 
      required: true,
    },
    date: {
      type: String, 
      required: true,
    },
    copyright: {
      type: String, 
      required: false,
    },
    explanation: {
      type: String, 
      required: true,
    },
    url: {
      type: String, 
      required: true,
    }
  },
  { timestamps: true}
)

export default model<IFavorite>("Favorite", favoriteSchema)