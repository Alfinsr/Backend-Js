import Books from "../models/booksModel.js";

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
        const newBook = await Books.create({
            title,
            description,
            image_url: image,
            release_year,
            price,
            total_page,
            category_id,
        });
        res.status(201).json({ msg: "Book Added", data: newBook });
    } catch (error) {
        console.log(error.message);
    }
};

