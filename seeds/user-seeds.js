const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'Bobby',
    email: 'bobby@bradybunch.com',
    password: 'password123'
  },
  {
    username: 'Cindy',
    email: 'cindy@bradybunch.com',
    password: 'password123'
  },
  {
    username: 'Marsha',
    email: 'marsha@bradybunch.com',
    password: 'password123'
  },
  {
    username: 'Peter',
    email: 'peter@bradybunch.com',
    password: 'password123'
  },
  {
    username: 'Jan',
    email: 'jan@bradybunch.com',
    password: 'password123'
  },
  {
    username: 'Greg',
    email: 'greg@bradybunch.com',
    password: 'password123'
  },
  {
    username: 'Alice',
    email: 'alice@bradybunch.com',
    password: 'password123'
  },
  {
    username: 'Sam',
    email: 'sam@bradybunch.com',
    password: 'password123'
  },
  {
    username: 'Mike',
    email: 'mike@bradybunch.com',
    password: 'password123'
  },
  {
    username: 'Carol',
    email: 'carol@bradybunch.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
