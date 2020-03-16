"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    var Post = sequelize.define('Post', {
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
        fk_id_author: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
    return Post;
}
exports.default = default_1;
//# sourceMappingURL=post.js.map