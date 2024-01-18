import express from "express"
import { getBooks } from "../controller/booksController.js"

const router = express.Router()
router.get('/books', getBooks)

export default router;