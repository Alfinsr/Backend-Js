import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
import Categories from './categoriesModel.js';
const { DataTypes } = Sequelize;

const Books = db.define('books', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image_url: DataTypes.STRING,
    release_year: DataTypes.INTEGER,
    price: DataTypes.STRING,
    total_page: DataTypes.INTEGER,
    thickness: DataTypes.STRING,
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    category_id: DataTypes.INTEGER,
}, {
    freezeTableName: true,
    timestamps: false, 
});
Books.belongsTo(Categories, { foreignKey: 'category_id' });
export default Books;
