"use strict";
exports.__esModule = true;
var express_1 = require("express");
var favorites_1 = require("../controllers/favorites");
var router = express_1.Router();
router.get("/favorites", favorites_1.getFavorites);
router.post("/addfavorite", favorites_1.addFavorite);
router["delete"]("/deletefavorite/:id", favorites_1.deleteFavorite);
exports["default"] = router;
