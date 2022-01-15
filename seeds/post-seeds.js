const { Post } = require('../models');

const postdata = [
  {
    title: 'Title 1',
    post_body: 'let a = 0; let b = 1; console.log(a + b);',
    vote_count: 40,
    user_id: 1,
    tag_genre: 'Advice',
    tag_language: 'Javascript'
  },
  {
    title: 'Title 2',
    post_body: 'Post Body 2',
    vote_count: 0,
    user_id: 2,
    tag_genre: 'Funny',
    tag_language: 'HTML'
  },
  {
    title: 'Title 3',
    post_body: 'Post Body 3',
    vote_count: 27,
    user_id: 3,
    tag_genre: 'Advice',
    tag_language: 'CSS'
  },
  {
    title: 'Title 4',
    post_body: 'Post Body 4',
    vote_count: 300,
    user_id: 4,
    tag_genre: 'Funny',
    tag_language: 'Java'
  },
  {
    title: 'Title 5',
    post_body: 'Post Body 5',
    vote_count: 420,
    user_id: 5,
    tag_genre: 'Advice',
    tag_language: 'C#'
  },
  {
    title: 'Title 6',
    post_body: 'Post Body 6',
    vote_count: 69,
    user_id: 6,
    tag_genre: 'Funny',
    tag_language: 'C++'
  },
  {
    title: 'Title 7',
    post_body: 'Post Body 7',
    vote_count: 99,
    user_id: 7,
    tag_genre: 'Advice',
    tag_language: 'PHP'
  },
  {
    title: 'Title 8',
    post_body: 'Post Body 8',
    vote_count: 19,
    user_id: 8,
    tag_genre: 'Funny',
    tag_language: 'Python'
  },
  {
    title: 'Title 9',
    post_body: 'Post Body 9',
    vote_count: 12,
    user_id: 9,
    tag_genre: 'Advice',
    tag_language: 'Javascript'
  },
  {
    title: 'Title 10',
    post_body: 'Post Body 10',
    vote_count: 7,
    user_id: 10,
    tag_genre: 'Funny',
    tag_language: 'HTML'
  },
  {
    title: 'Title 11',
    post_body: 'Post Body 11',
    vote_count: 3,
    user_id: 10,
    tag_genre: 'Advice',
    tag_language: 'CSS'
  },
  {
    title: 'Title 12',
    post_body: 'Post Body 12',
    vote_count: 5,
    user_id: 9,
    tag_genre: 'Funny',
    tag_language: 'Java'
  },
  {
    title: 'Title 13',
    post_body: 'Post Body 13',
    vote_count: 32,
    user_id: 8,
    tag_genre: 'Advice',
    tag_language: 'C#'
  },
  {
    title: 'Title 14',
    post_body: 'Post Body 14',
    vote_count: 8,
    user_id: 7,
    tag_genre: 'Funny',
    tag_language: 'C++'
  },
  {
    title: 'Title 15',
    post_body: 'Post Body 15',
    vote_count: 45,
    user_id: 6,
    tag_genre: 'Advice',
    tag_language: 'PHP'
  },
  {
    title: 'Title 16',
    post_body: 'Post Body 16',
    vote_count: 5,
    user_id: 5,
    tag_genre: 'Funny',
    tag_language: 'Python'
  },
  {
    title: 'Title 17',
    post_body: 'Post Body 17',
    vote_count: 23,
    user_id: 4,
    tag_genre: 'Advice',
    tag_language: 'Javascript'
  },
  {
    title: 'Title 18',
    post_body: 'Post Body 18',
    vote_count: 1,
    user_id: 3,
    tag_genre: 'Funny',
    tag_language: 'HTML'
  },
  {
    title: 'Title 19',
    post_body: 'Post Body 19',
    vote_count: 320,
    user_id: 2,
    tag_genre: 'Advice',
    tag_language: 'CSS'
  },
  {
    title: 'Title 20',
    post_body: 'Post Body 20',
    vote_count: 148,
    user_id: 1,
    tag_genre: 'Funny',
    tag_language: 'Java'
  },
  {
    title: 'Title 21',
    post_body: 'Post Body 21',
    vote_count: 2,
    user_id: 2,
    tag_genre: 'Advice',
    tag_language: 'C#'
  },
  {
    title: 'Title 22',
    post_body: 'Post Body 22',
    vote_count: 15,
    user_id: 3,
    tag_genre: 'Funny',
    tag_language: 'C++'
  },
  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
