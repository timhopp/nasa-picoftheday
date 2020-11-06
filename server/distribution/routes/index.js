"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const favorites_1 = require("../controllers/favorites");
const router = express_1.Router();
router.get("/favorites", favorites_1.getFavorites);
router.post("/addfavorite", favorites_1.addFavorite);
router.delete("/deletefavorite/:id", favorites_1.deleteFavorite);
exports.default = router;
