import express from "express"
import { getCategories, 
    createCategorie,
    updateCategorie,
    deleteCategorie,
    getCategorieById,
 } from "../controller/categoriesController.js"
 import { getFilteredBooks } from "../controller/booksController.js"
 import { verifyToken } from "../middleware/VerifyToken.js"

const router = express.Router()
router.get('/categories', getCategories)
router.post('/categories/',verifyToken, createCategorie)
router.patch('/categories/:id',verifyToken, updateCategorie)
router.delete('/categories/:id',verifyToken, deleteCategorie)
router.get('/categories/:id', getCategorieById)
router.get('/categories/:id/books', getFilteredBooks)

export default router;