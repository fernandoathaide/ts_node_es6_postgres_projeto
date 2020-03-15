"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createPost(_a) {
    var id_post = _a.id_post, title = _a.title, text = _a.text, fk_id_author = _a.fk_id_author;
    return { id_post: id_post, title: title, text: text, fk_id_author: fk_id_author };
}
exports.createPost = createPost;
function createPosts(data) {
    return data.map(createPost);
}
exports.createPosts = createPosts;
function createPostById(_a) {
    var id_post = _a.id_post, title = _a.title, text = _a.text, fk_id_author = _a.fk_id_author;
    return { id_post: id_post, title: title, text: text, fk_id_author: fk_id_author };
}
exports.createPostById = createPostById;
//# sourceMappingURL=interfacePost.js.map