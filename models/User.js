const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

// create the user model

class User extends Model {
  // this method checks the password with the hashed password to match and then logs in the user
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// define table columns, configuration for user model

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,

      // there cannot be any duplicate emails, so we will check to see if it is unique
      unique: true,

      // if allow null is set to false, we should validate this
      validate: {
        isEmail: true,
      },
    },

    title: {
      type: DataTypes.STRING,
      allowNull: true
    },

    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    github: {
      type: DataTypes.STRING,
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "avatar1.png"
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5],
      },
    },
  },
  // table configuration starts here
  {
    // hooks for password

    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },

      // setup before lifecycle 'hook' functionality for when the user wants to update the password
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },

    // pass imported sequelize connection
    sequelize,

    // dont automatically update the timestamp fields
    timestamps: false,

    // dont pluralize name of database table
    freezeTableName: true,

    // use underscores instead of camel-casing
    underscored: true,

    // make it so our model name stays lowercase in the database and also set the model name as 'user'
    modelName: "user",
  }
);

module.exports = User;
