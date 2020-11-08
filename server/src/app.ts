import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import routes from "./routes"
import bodyParser from "body-parser"
import * as dotenv from 'dotenv'

//dotenv is required use an .env file, it is not a node.js standard
dotenv.config()

const app: Express = express()
const path = require("path")

//jsonParser is required to use req.body
let jsonParser = bodyParser.json();

let urlencodedParser = bodyParser.urlencoded({ extended: false })

const PORT: string | number = process.env.PORT || 3000

app.use(cors())
//parser is required before routes
app.use(jsonParser)
app.use(routes)

//Figure out how to make api use static build, aka distribution?

if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/distribution"));
  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "client", "distribution", "index.html"));
  //   // res.sendFile("client/distribution/index.html");
  // });
}



const uri: string = `${process.env.CONNECTION_STRING}`
// `${process.env.CONNECTION_STRING}`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on port: ${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })