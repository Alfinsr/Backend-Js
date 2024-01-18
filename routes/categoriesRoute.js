import express from "express"
import { getCategories, 
    createCategorie,
    updateCategorie,
    deleteCategorie,
    getCategorieById
 } from "../controller/categoriesController.js"

const router = express.Router()
router.get('/categories', getCategories)
router.post('/categories/', createCategorie)
router.patch('/categories/:id', updateCategorie)
router.delete('/categories/:id', deleteCategorie)
router.get('/categories/:id', getCategorieById)

export default router;