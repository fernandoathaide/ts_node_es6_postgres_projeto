"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interfaceUser_1 = require("./interfaceUser");
var model = require('../../models');
var ServiceUser = /** @class */ (function () {
    function ServiceUser() {
    }
    ServiceUser.prototype.create = function (user) {
        return model.User.create(user);
    };
    ServiceUser.prototype.getAll = function () {
        return model.User.findAll({
            order: ['name']
        })
            .then(interfaceUser_1.createUsers);
    };
    ServiceUser.prototype.getById = function (id_user) {
        return model.User.findOne({
            where: { id_user: id_user }
        })
            .then(interfaceUser_1.createUserById);
    };
    ServiceUser.prototype.getByEmail = function (email) {
        return model.User.findOne({
            where: { email: email }
        })
            .then(interfaceUser_1.createUserByEmail);
    };
    ServiceUser.prototype.update = function (id_user, user) {
        return model.User.update(user, {
            where: { id_user: id_user },
            fields: ['name', 'email', 'password'],
            hooks: true,
            individualHooks: true
        });
    };
    ServiceUser.prototype.delete = function (id_user) {
        return model.User.destroy({
            where: { id_user: id_user }
        });
    };
    return ServiceUser;
}());
exports.default = new ServiceUser();
