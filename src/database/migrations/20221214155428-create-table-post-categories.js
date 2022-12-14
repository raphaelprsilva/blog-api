'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('PostCategories', {
      postId: {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      categoryId: {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'Categories',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
    }),

  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('PostCategories'),
};
