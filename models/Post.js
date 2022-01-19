const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// post class that extends model
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      // title of the post (will not contain code)
      type: DataTypes.STRING,
      allowNull: true,
    },

    post_body: {
      // body of the post (can contain code)
      type: DataTypes.TEXT,
      allowNull: true,
    },

    vote_count: {
      // post url, with validation
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    // because mysql doesn't seem to like arrays, we are going to have to use JSON for storing the post id's that they user upvoted/downvoted
    upvoted_users: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {
        type: DataTypes.ARRAY,
      },
    },

    downvoted_users: {
      // will attempt to get relationships/associations working tomorrow.
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {
        type: DataTypes.ARRAY,
      },
    },

    user_id: {
      // user id with reference to user model and key
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },

    tag_genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    tag_language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    // boiler plate setup
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post", // model name will always be lowercase and be directly the same name as the model itself
  }
);

module.exports = Post;
