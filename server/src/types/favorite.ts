import { Document } from "mongoose"

export interface IFavorite extends Document {
  id?: string, 
  date: string, 
  title: string,
  copyright: string,
  explanation: string,
  url: string
}