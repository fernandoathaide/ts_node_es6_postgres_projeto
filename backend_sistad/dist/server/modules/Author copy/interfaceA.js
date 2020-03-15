"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createAuthor(_a) {
    var id_author = _a.id_author, name = _a.name;
    return { id_author: id_author, name: name };
}
exports.createAuthor = createAuthor;
function createAuthors(data) {
    return data.map(createAuthor);
}
exports.createAuthors = createAuthors;
function createAuthorById(_a) {
    var id_author = _a.id_author, name = _a.name;
    return { id_author: id_author, name: name };
}
exports.createAuthorById = createAuthorById;
//# sourceMappingURL=interfaceA.js.map