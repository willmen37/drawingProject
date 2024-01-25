import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js"
import openaiRoute from "./routes/openaiRoute.js"

const PORT = 5000

dotenv.config();
const app = express();
app.use(cors());
                   //what is this??
app.use(express.json( {limit:"50mb"}))
app.use("/api/v1/posts", postRoutes)
app.use("/api/v1/openaiRoute", openaiRoute)

app.get("/", async (req, res)=> {
    res.send("HOLA from the SERVER")
})

const startServer = async () =>{

    try{
        connectDB(process.env.MONGO_URL);
        app.listen( PORT, () => {
            console.log(`server listening on PORT:${PORT}`)
        })

    }catch(error){
        console.log(error)

    }

   
}

startServer();

