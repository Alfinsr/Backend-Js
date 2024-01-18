import express from "express"
import categoriesRoute from "./routes/categoriesRoute.js"
const port = 3000
const app = express()


app.use(express.json())

app.listen(port, () => 
console.log(`Server Aktif dengan Port : ${port}`) )

app.use(categoriesRoute)

