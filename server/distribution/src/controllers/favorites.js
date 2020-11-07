"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFavorite = exports.addFavorite = exports.getFavorites = void 0;
const favorite_1 = __importDefault(require("../models/favorite"));
const getFavorites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const favorites = yield favorite_1.default.find();
        res.status(200).json(favorites);
    }
    catch (error) {
        throw error;
    }
});
exports.getFavorites = getFavorites;
const addFavorite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        debugger;
        const body = req.body;
        const favorite = new favorite_1.default({
            title: body.title,
            date: body.date,
            explanation: body.explanation,
            url: body.url,
            copyright: body.copyright
        });
        const newFavorite = yield favorite.save();
        const allFavorites = yield favorite_1.default.find();
        res
            .status(201)
            .json({ message: 'Favorite Added', favorite: newFavorite, favorites: allFavorites });
    }
    catch (error) {
        throw error;
    }
});
exports.addFavorite = addFavorite;
const deleteFavorite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedFavorite = yield favorite_1.default.findByIdAndRemove(req.params.id);
        const allFavorites = yield favorite_1.default.find();
        res.status(200).json({
            message: "Favorite Deleted",
            favorite: deletedFavorite,
            favorites: allFavorites
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteFavorite = deleteFavorite;
