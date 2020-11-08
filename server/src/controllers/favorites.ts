import { Response, Request } from "express"
import { IFavorite } from "../types/favorite"
import Favorite from "../models/favorite"
import { InstanceType} from "typegoose"

const getFavorites = async (req: Request, res: Response): Promise<void> => {
  try {
    const favorites: IFavorite[] = await Favorite.find()
    res.status(200).json(favorites)
  } catch (error) {
    throw error
  }
}

const addFavorite = async ( req: Request, res: Response): Promise<void> => {
  try {
    debugger
    const body = req.body  as Pick<IFavorite, "title" | "date" | "explanation" | "url" | "copyright" >

    const favorite: IFavorite = new Favorite({
      title: body.title, 
      date: body.date,
      explanation: body.explanation, 
      url: body.url,
      copyright: body.copyright
    })

    // const newFavorite: InstanceType<IFavorite> = await
     favorite.save()
    const allFavorites: IFavorite[] = await Favorite.find()

    res 
    .status(201)
    .json({message:'Favorite Added', 
    // favorite: newFavorite, 
    favorites: allFavorites})
  } catch (error) {
    throw error
  }
}

const deleteFavorite = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedFavorite: IFavorite | null = await Favorite.findByIdAndRemove(req.params.id)
    const allFavorites: IFavorite[] = await Favorite.find()
    res.status(200).json({
      message: "Favorite Deleted",
      favorite: deletedFavorite, 
      favorites: allFavorites
    })
  } catch(error) {
    throw error
  }
}


export { getFavorites, addFavorite, deleteFavorite }