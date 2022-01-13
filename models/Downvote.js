const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class DownVote extends Model {}


DownVote.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },

        user_id: { // getting the user id, references user model
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'user',
                key: 'id'
            }
        },

        post_id: { // getting post id, references post model 
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
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'downvote'
    }
)
