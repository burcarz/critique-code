const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },

    comment_body: {
      // comment body (will not contain code as of right now)
      type: DataTypes.TEXT,
      allowNull: true,
    },

    user_id: {
      // getting the user id, references user model
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "user",
        key: "id",
      },
    },

    post_id: {
      // getting the post id, references post model
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "post",
        key: "id",
      },
    },

    // could add comment_id and then run a check in the routes to make sure it's referencing either a post or a comment later on
  },
  {
    // boilerplate
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

module.exports = Comment;
