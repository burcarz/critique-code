const User = require('./User')
const Post = require('./Post')
// const UpVote = require('./Upvote')
// const DownVote = require('./Downvote')
const Comment = require('./Comment')

// create associations 

// association for User and Post, relationship being that User has many Post
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
})

// association for Post and User, relationship being that Post belongs to User model
Post.belongsTo(User, {
    foreignKey: 'user_id'
})

// User and Posts have many comments 

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Post.hasMany(Comment, {
    foreignKey: 'post_id'
})



// User beings to post through Upvote and Downvote, so there will need to be two belongsToMany calls since we want to associate both with the user

// association for upvotes
/*User.belongsToMany(Post, {
    through: UpVote,
    as: 'upvoted_posts',
    foreignKey: 'user_id'
})

// association for downvotes
/*User.belongsToMany(Post, {
    through: DownVote,
    as: 'downvoted_posts',
    foreignKey: 'user_id'
})*/


// doing the same thing here that we did for User, just for posts

// association for upvotes
/*Post.belongsToMany(User, {
    through: UpVote,
    as: 'upvoted_posts',
    foreignKey: 'user_id'
})

// association for downvotes
/*Post.belongsToMany(User, {
    through: DownVote,
    as: 'downvoted_posts',
    foreignKey: 'user_id'
})*/

// associations for Upvotes
/*UpVote.belongsTo(User, {
    foreignKey: 'user_id'
})

UpVote.belongsTo(Post, {
    foreignKey: 'post_id'
})

// same as upvote just switched the name to downvote
/*DownVote.belongsTo(User, {
    foreignKey: 'user_id'
})

DownVote.belongsTo(Post, {
    foreignKey: 'post_id'
})*/


// User has many upvotes and downvotes 
/*User.hasMany(UpVote, {
    foreignKey: 'user_id'
})

/*User.hasMany(DownVote, {
    foreignKey: 'user_id'
})*/


// Post can also have many upvotes and downvotes
/*Post.hasMany(UpVote, {
    foreignKey: 'post_id'
})

/*Post.hasMany(DownVote, {
    foreignKey: 'post_id'
})*/


// Comment belongs to user and post 
Comment.belongsTo(User, {
    foreignKey: 'user_id',
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
})

module.exports = { User, Post, Comment } // add UpVote and DownVote later