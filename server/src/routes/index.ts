import { Router } from "express"
import { getFavorites, addFavorite, deleteFavorite } from "../controllers/favorites"

const router: Router = Router()

router.get("/favorites", getFavorites)

router.post("/addfavorite", addFavorite)

router.delete("/deletefavorite/:id", deleteFavorite)

export default router