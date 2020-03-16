var Relations = function (model) {
    model.Author.hasMany(model.Post, { foreignKey: 'fk_id_author' });
    model.Post.belongsTo(model.Author, { foreignKey: 'fk_id_author' });
};
module.exports = Relations;
//# sourceMappingURL=relations.js.map