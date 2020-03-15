export default function (sequelize, DataTypes) {
    const Post = sequelize.define('Post', {
        id_Post: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fk_id_author:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
    return Post;
}