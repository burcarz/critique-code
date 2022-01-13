const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class UpVote extends Model {}


UpVote.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },

        user_id: { // getting a user by their id, references user model
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'user',
                key: 'id'
            }
        },

        post_id: { // getting a post by their id, references post model
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'post',
                key: 'id'
            }
        }

        // possibly adding something here so that the users can vote on comments 
        
    },

    {
        // boilerplate
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'upvote'
    }
)

module.exports = UpVote