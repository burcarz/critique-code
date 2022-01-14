const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// create associations

// association for User and Post, relationship being that User has many Post
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

// association for Post and User, relationship being that Post belongs to User model
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// User and Posts have many comments

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

// Comment belongs to user and post
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Comment }; // add UpVote and DownVote later
