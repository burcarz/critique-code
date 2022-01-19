const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'Bobby',
    email: 'bobby@bradybunch.com',
    github: 'bobby', 
    upvoted_posts:{[1,2]}, 
    downvoted_posts:{[3,4]}, 
    password: 'password123'
  },
  {
    username: 'Cindy',
    email: 'cindy@bradybunch.com',
    github: 'cindy', 
    upvoted_posts:{[5,6]}, 
    downvoted_posts:{[7,8]}, 
    password: 'password123'
  },
  {
    username: 'Marsha',
    email: 'marsha@bradybunch.com',
    github: 'marsha', 
    upvoted_posts:{[9,10]}, 
    downvoted_posts:{[11,12]}, 
    password: 'password123'
  },
  {
    username: 'Peter',
    email: 'peter@bradybunch.com',
    github: 'peter', 
    upvoted_posts:{[13,14]}, 
    downvoted_posts:{[15,16]}, 
    password: 'password123'
  },
  {
    username: 'Jan',
    email: 'jan@bradybunch.com',
    github: 'jan', 
    upvoted_posts:{[17,18]}, 
    downvoted_posts:{[19,20]}, 
    password: 'password123'
  },
  {
    username: 'Greg',
    email: 'greg@bradybunch.com',
    github: 'boddy', 
    upvoted_posts:{[21,22]}, 
    downvoted_posts:{[20,19]}, 
    password: 'password123'
  },
  {
    username: 'Alice',
    email: 'alice@bradybunch.com',
    github: 'alice', 
    upvoted_posts:{[18,17]}, 
    downvoted_posts:{[16,15]}, 
    password: 'password123'
  },
  {
    username: 'Sam',
    email: 'sam@bradybunch.com',
    github: 'sam', 
    upvoted_posts:{[14,13]}, 
    downvoted_posts:{[12,11]}, 
    password: 'password123'
  },
  {
    username: 'Mike',
    email: 'mike@bradybunch.com',
    github: 'mike', 
    upvoted_posts:{[10,9]}, 
    downvoted_posts:{[8,7]}, 
    password: 'password123'
  },
  {
    username: 'Carol',
    email: 'carol@bradybunch.com',
    github: 'carol', 
    upvoted_posts:{[6,5]}, 
    downvoted_posts:{[4,3]}, 
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
