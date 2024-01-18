import express from "express"
import { getBooks,
        createBook,
        updateBook,
        deleteBook,
        getBookById

} from "../controller/booksController.js"

const router = express.Router()
router.get('/books', getBooks)
router.post('/books', createBook)
router.patch('/books/:id', updateBook)
router.delete('/books/:id', deleteBook)
router.get('/books/:id', getBookById)

export default router;