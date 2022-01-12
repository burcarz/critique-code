const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

// post class that extends model 
class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, // allow null is always going to false on any model, since this is the primary reference point
            primaryKey: true,
            autoIncrement: true 
        },

        title: { // title of the post (will not contain code)
            type: DataTypes.STRING,
            allowNull: false
        },

        body: { // body of the post (can contain code)
            type: DataTypes.STRING,
            allowNull: false
        },

        post_url: { // post url, with validation
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        },
        user_id: { // user id with reference to user model and key
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },

    {
        // boiler plate setup
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post' // model name will always be lowercase and be directly the same name as the model itself
    }
)

module.exports = Post