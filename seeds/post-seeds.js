const { Post } = require('../models');

const postdata = [
  {
    title: 'Title 1',
    body: 'Post Body 1',
    post_url: 'https://somewebsite.com',
    user_id: 1
  },
  {
    title: 'Title 2',
    body: 'Post Body 2',
    post_url: 'https://somewebsite.com',
    user_id: 2
  },
  {
    title: 'Title 3',
    body: 'Post Body 3',
    post_url: 'https://somewebsite.com',
    user_id: 3
  },
  {
    title: 'Title 4',
    body: 'Post Body 4',
    post_url: 'https://somewebsite.com',
    user_id: 4
  },
  {
    title: 'Title 5',
    body: 'Post Body 5',
    post_url: 'https://somewebsite.com',
    user_id: 5
  },
  {
    title: 'Title 6',
    body: 'Post Body 6',
    post_url: 'https://somewebsite.com',
    user_id: 6
  },
  {
    title: 'Title 7',
    body: 'Post Body 7',
    post_url: 'https://somewebsite.com',
    user_id: 7
  },
  {
    title: 'Title 8',
    body: 'Post Body 8',
    post_url: 'https://somewebsite.com',
    user_id: 8
  },
  {
    title: 'Title 9',
    body: 'Post Body 9',
    post_url: 'https://somewebsite.com',
    user_id: 9
  },
  {
    title: 'Title 10',
    body: 'Post Body 10',
    post_url: 'https://somewebsite.com',
    user_id: 10
  },
  {
    title: 'Title 11',
    body: 'Post Body 11',
    post_url: 'https://somewebsite.com',
    user_id: 10
  },
  {
    title: 'Title 12',
    body: 'Post Body 12',
    post_url: 'https://somewebsite.com',
    user_id: 9
  },
  {
    title: 'Title 13',
    body: 'Post Body 13',
    post_url: 'https://somewebsite.com',
    user_id: 8
  },
  {
    title: 'Title 14',
    body: 'Post Body 14',
    post_url: 'https://somewebsite.com',
    user_id: 7
  },
  {
    title: 'Title 15',
    body: 'Post Body 15',
    post_url: 'https://somewebsite.com',
    user_id: 6
  },
  {
    title: 'Title 16',
    body: 'Post Body 16',
    post_url: 'https://somewebsite.com',
    user_id: 5
  },
  {
    title: 'Title 17',
    body: 'Post Body 17',
    post_url: 'https://somewebsite.com',
    user_id: 4
  },
  {
    title: 'Title 18',
    body: 'Post Body 18',
    post_url: 'https://somewebsite.com',
    user_id: 3
  },
  {
    title: 'Title 19',
    body: 'Post Body 19',
    post_url: 'https://somewebsite.com',
    user_id: 2
  },
  {
    title: 'Title 20',
    body: 'Post Body 20',
    post_url: 'https://somewebsite.com',
    user_id: 1
  },
  {
    title: 'Title 21',
    body: 'Post Body 21',
    post_url: 'https://somewebsite.com',
    user_id: 2
  },
  {
    title: 'Title 22',
    body: 'Post Body 22',
    post_url: 'https://somewebsite.com',
    user_id: 3
  },
  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
