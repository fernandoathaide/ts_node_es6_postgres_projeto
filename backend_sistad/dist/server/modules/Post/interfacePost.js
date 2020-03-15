"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createPost(_a) {
    var id_post = _a.id_post, title = _a.title, text = _a.text, Author = _a.Author;
    return { id_post: id_post, title: title, text: text, Author: Author };
}
exports.createPost = createPost;
function createPosts(data) {
    return data.map(createPost);
}
exports.createPosts = createPosts;
