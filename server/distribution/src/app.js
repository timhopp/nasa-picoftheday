"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv = __importStar(require("dotenv"));
//dotenv is required use an .env file, it is not a node.js standard
dotenv.config();
const app = express_1.default();
const path = require("path");
//jsonParser is required to use req.body
let jsonParser = body_parser_1.default.json();
let urlencodedParser = body_parser_1.default.urlencoded({ extended: false });
const PORT = process.env.PORT || 3000;
app.use(cors_1.default());
//parser is required before routes
app.use(jsonParser);
app.use(routes_1.default);
//Figure out how to make api use static build, aka distribution?
if (process.env.NODE_ENV === "production") {
    //set static folder
    app.use(express_1.default.static("client/distribution"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "distribution", "index.html"));
        // res.sendFile("client/distribution/index.html");
    });
}
const uri = `${process.env.CONNECTION_STRING}`;
// `${process.env.CONNECTION_STRING}`
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1.default.set("useFindAndModify", false);
mongoose_1.default
    .connect(uri, options)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch(error => {
    throw error;
});
