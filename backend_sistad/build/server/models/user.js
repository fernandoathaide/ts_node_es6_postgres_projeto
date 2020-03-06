"use strict";
// import * as bcrypt from 'bcrypt';
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id_user: {
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
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    /*
    User.beforeCreate((user) => {
        return hashPassword(user);
    });
    
    User.beforeUpdate((user) => {
        return hashPassword(user);
    });
    /*
    function hashPassword(user) {
        const salt = bcrypt.genSaltSync(10);
        user.set('password', bcrypt.hashSync(user.password, salt));
    }
    */
    return User;
}
exports.default = default_1;
