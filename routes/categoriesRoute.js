import express from "express"
import { getCategories, 
    createCategories,
    updateCategories,
    deleteCategories,
    getCategoriesById
 } from "../controller/categoriesController.js"

const router = express.Router()
router.get('/categories', getCategories)
router.post('/categories/', createCategories)
router.patch('/categories/:id', updateCategories)
router.delete('/categories/:id', deleteCategories)
router.get('/categories/:id', getCategoriesById)

export default router;