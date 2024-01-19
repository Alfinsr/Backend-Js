import express from "express"
import categoriesRoute from "./routes/categoriesRoute.js"
import booksRoute from "./routes/booksRoute.js"
import router from "./routes/usersRoute.js"
import db from "./config/Database.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
dotenv.config()


const port = 3000
const app = express()




app.listen(port, () => 
console.log(`Server Aktif dengan Port : ${port}`) )
try {
    await db.authenticate()
    console.log('Database Connected ...')
} catch (error) {
    console.log(error, error.message)
}

app.use(cors({ credentials: true, origin:'http:/localhost:3000' }))
app.use(cookieParser())
app.use(express.json())
app.use(categoriesRoute)
app.use(booksRoute)
app.use(router)



