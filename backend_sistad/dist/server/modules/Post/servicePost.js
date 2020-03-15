"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interfacePost_1 = require("./interfacePost");
var model = require('../../models');
var ServicePost = (function () {
    function ServicePost() {
    }
    ServicePost.prototype.createPost = function (post) {
        return model.Post.create(post);
    };
    ServicePost.prototype.getAllPost = function () {
        return model.Post.findAll({
            order: ['title'],
            include: [{ model: model.Author }]
        })
            .then(interfacePost_1.createPosts);
    };
    ServicePost.prototype.getPostById = function (id_post) {
        return model.Post.findOne({
            where: { id_post: id_post },
            include: [{ model: model.Author }]
        });
    };
    ServicePost.prototype.updatePost = function (id_post, post) {
        return model.Post.update(post, {
            where: { id_post: id_post },
            fields: ['title', 'text', 'fk_id_author'],
            hooks: true,
            individualHooks: true
        });
    };
    ServicePost.prototype.deletePost = function (id_post) {
        return model.Post.destroy({
            where: { id_post: id_post }
        });
    };
    return ServicePost;
}());
exports.default = new ServicePost();
