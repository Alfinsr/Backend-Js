import express from "express"
import { getBooks,
        createBook,
        updateBook,
        deleteBook,
        getBookById

} from "../controller/booksController.js"
import { verifyToken } from "../middleware/VerifyToken.js"


const router = express.Router()
router.get('/books', getBooks)
router.post('/books',verifyToken, createBook)
router.patch('/books/:id',verifyToken, updateBook)
router.delete('/books/:id',verifyToken, deleteBook)
router.get('/books/:id', getBookById)



export default router;