"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createAuthor(_a) {
    var id_author = _a.id_author, name = _a.name, Posts = _a.Posts;
    return { id_author: id_author, name: name, Posts: Posts };
}
exports.createAuthor = createAuthor;
function createAuthors(data) {
    return data.map(createAuthor);
}
exports.createAuthors = createAuthors;
//# sourceMappingURL=interfaceAuthor.js.map