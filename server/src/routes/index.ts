import { Router } from "express"
import { getFavorites, addFavorite, deleteFavorite, deleteAllFavorites } from "../controllers/favorites"

const router: Router = Router()


router.get("/favorites/:user", getFavorites)

router.post("/addfavorite", addFavorite)

router.delete("/deletefavorite/:id", deleteFavorite)

router.delete("/deleteAll", deleteAllFavorites)

export default router