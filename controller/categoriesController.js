import Categories from "../models/categoriesModel.js"


export const getCategories = async (req, res) => {
    try {
        const response = await Categories.findAll();
        res.status(200).json(response)
    } catch (error) {
        console.log(error.nessage)
        
    }
}



export const createCategorie = async (req, res) => {
    try {
        await Categories.create(req.body)
        res.status(201).json({msg: "Categorie Added"})
    } catch (error) {
        console.log(error.message)
        
    }
}

export const updateCategorie = async (req, res) => {
    try {
        await Categories.update(req.body, {
            where:{
                id:req.params.id
        }})
        res.status(200).json({msg: "Categorie Updated"})
    } catch (error) {
        console.log(error.message)
        
    }
}

export const deleteCategorie = async (req, res) => {
    try {
        await Categories.destroy({
            where:{
                id:req.params.id
            } 
        })
        res.status(200).json({msg: "Categorie Deleted"})
    } catch (error) {
        console.log(error.message)
        
    }
}

export const getCategorieById = async (req, res) => {
    try {
        const response = await Categories.findOne({
            where:{
               id: req.params.id 
            }
        });
        res.status(200).json(response)
    } catch (error) {
        console.log(error.nessage)
        
    }
}