import express from "express"
import { getBooks,
        createBook

} from "../controller/booksController.js"

const router = express.Router()
router.get('/books', getBooks)
router.post('/books', createBook)

export default router;