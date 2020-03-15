export default function (sequelize, DataTypes) {
    const Author = sequelize.define('Author', {
        id_author: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    return Author;
}