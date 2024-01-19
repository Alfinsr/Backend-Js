import Books from "../models/booksModel.js";
import { Sequelize } from "sequelize";
import Categories from "../models/categoriesModel.js";

export const getBooks = async (req, res) => {
    try {
        const response = await Books.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};


export const createBook = async (req, res) => {
    try {
        const { title, description, image, release_year, price, total_page, category_id } = req.body;

        if (release_year < 1980 || release_year > 2021) {
            return res.status(400).json({ error: "Invalid release year. Must be between 1980 and 2021." });
        }
        const thickness = total_page <= 100 ? "tipis" : (total_page <= 200 ? "sedang" : "tebal");
        const newBook = await Books.create({
            title,
            description,
            image_url: image,
            release_year,
            price,
            total_page,
            thickness,
            category_id,
        });
        res.status(201).json({ msg: "Book Added", data: newBook });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateBook = async (req, res) => {
    try {
        const { title, description, image, release_year, price, total_page, category_id } = req.body;
        await Books.update(
            {
                title,
                description,
                image_url: image,
                release_year,
                price,
                total_page,
                category_id,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json({ msg: "Book Updated" });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteBook = async (req, res) => {
    try {
        await Books.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "Book Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};

export const getBookById = async (req, res) => {
    try {
        const response = await Books.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};


export const getFilteredBooks = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const { title, minYear, maxYear, minPage, maxPage, sortByTitle } = req.query;

        const filterConditions = {
            category_id: categoryId,
        };

        if (title) {
            filterConditions.title = { [Sequelize.Op.iLike]: `%${title}%` };
        }

        if (minYear && maxYear) {
            filterConditions.release_year = {
                [Sequelize.Op.between]: [parseInt(minYear), parseInt(maxYear)],
            };
        } else {
            if (minYear) {
                filterConditions.release_year = {
                    [Sequelize.Op.gte]: parseInt(minYear),
                };
            }
        
            if (maxYear) {
                filterConditions.release_year = {
                    ...filterConditions.release_year,
                    [Sequelize.Op.lte]: parseInt(maxYear),
                };
            }
        }
        
        if (minPage) {
            filterConditions.total_page = {
                [Sequelize.Op.gte]: parseInt(minPage),
            };
        }
        
        if (maxPage) {
            filterConditions.total_page = {
                ...filterConditions.total_page,
                [Sequelize.Op.lte]: parseInt(maxPage),
            };
        }
        const order = sortByTitle === "desc" ? [["title", "DESC"]] : [["title", "ASC"]];

        console.log("Filter Conditions:", filterConditions);
        const result = await Books.findAll({
        where: filterConditions,
        order: order,
});
console.log("Query Result:", result);

        res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
    }
};


