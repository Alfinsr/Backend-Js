import Books from "../models/booksModel.js";

export const getBooks = async (req, res) => {
    try {
        const response = await Books.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

