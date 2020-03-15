"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interfaceAuthor_1 = require("./interfaceAuthor");
var model = require('../../models');
var ServiceAuthor = (function () {
    function ServiceAuthor() {
    }
    ServiceAuthor.prototype.createAuthor = function (author) {
        return model.Author.create(author);
    };
    ServiceAuthor.prototype.getAllAuthor = function () {
        return model.Author.findAll({
            order: ['name']
        })
            .then(interfaceAuthor_1.createAuthors);
    };
    ServiceAuthor.prototype.getAuthorById = function (id_author) {
        return model.Author.findOne({
            where: { id_author: id_author }
        })
            .then(interfaceAuthor_1.createAuthorById);
    };
    ServiceAuthor.prototype.updateAuthor = function (id_author, author) {
        return model.Author.update(author, {
            where: { id_author: id_author },
            fields: ['name'],
            hooks: true,
            individualHooks: true
        });
    };
    ServiceAuthor.prototype.deleteAuthor = function (id_author) {
        return model.Author.destroy({
            where: { id_author: id_author }
        });
    };
    return ServiceAuthor;
}());
exports.default = new ServiceAuthor();
//# sourceMappingURL=servicePost.js.map