"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const favoriteSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.default = mongoose_1.model("Favorite", favoriteSchema);
