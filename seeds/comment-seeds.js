const { Comment } = require('../models');

const commentdata = [
  {
    comment_body: 'user 6 post 1',
    user_id: 6,
    post_id: 1
  },
  {
    comment_body: 'user 6 post 8',
    user_id: 6,
    post_id: 8
  },
  {
    comment_body: 'user 3 post 10',
    user_id: 3,
    post_id: 10
  },
  {
    comment_body: 'user 3 post 18',
    user_id: 3,
    post_id: 18
    
  },
  {
    comment_body: 'user 7 post 5',
    user_id: 7,
    post_id: 5
  },
  {
    comment_body: 'user 1 post 20',
    user_id: 1,
    post_id: 20
  },
  {
    comment_body: 'user 6 post 7',
    user_id: 6,
    post_id: 7
  },
  {
    comment_body: 'user 7 post 4',
    user_id: 7,
    post_id: 4
  },
  {
    comment_body: 'user 6 post 12',
    user_id: 6,
    post_id: 12
  },
  {
    comment_body: 'user 6 post 20',
    user_id: 6,
    post_id: 20
  },
  {
    comment_body: 'user 3 post 14',
    user_id: 3,
    post_id: 14
  },
  {
    comment_body: 'user 5 post 4',
    user_id: 5,
    post_id: 4
  },
  {
    comment_body: 'user 4 post 9',
    user_id: 4,
    post_id: 9
  },
  {
    comment_body:'user 5 post 14',
    user_id: 5,
    post_id: 14
  },
  {
    comment_body: 'user 6 post 2',
    user_id: 6,
    post_id: 2
  },
  {
    comment_body: 'user 8 post 2',
    user_id: 8,
    post_id: 2
  },
  {
    comment_body:'user 2 post 20',
    user_id: 2,
    post_id: 20
  },
  {
    comment_body: 'user 4 post 11',
    user_id: 4,
    post_id: 11
  },
  {
    comment_body:'user 5 post 13',
    user_id: 5,
    post_id: 13
  },
  {
    comment_body:'user 9 post 16',
    user_id: 9,
    post_id: 16
  },
  {
    comment_body: 'user 6 post 4',
    user_id: 6,
    post_id: 4
  },
  {
    comment_body: 'user 4 post 10',
    user_id: 4,
    post_id: 10
  },
  {
    comment_body: 'user 3 post 8',
    user_id: 3,
    post_id: 8
  },
  {
    comment_body:'user 8 post 10',
    user_id: 8,
    post_id: 10
  },
  {
    comment_body:'user 1 post 15',
    user_id: 1,
    post_id: 15
  },
  {
    comment_body: 'user 5 post 3',
    user_id: 5,
    post_id: 3
  },
  {
    comment_body: 'user 1 post 15',
    user_id: 1,
    post_id: 15
  },
  {
    comment_body: 'user 4 post 16',
    user_id: 4,
    post_id: 16
  },
  {
    comment_body: 'user 4 post 18',
    user_id: 4,
    post_id: 18
  },
  {
    comment_body: 'user 4 post 10',
    user_id: 4,
    post_id: 10
  },
  {
    comment_body: 'user 7 post 5',
    user_id: 7,
    post_id: 5
  },
  {
    comment_body: 'user 10 post 1',
    user_id: 10,
    post_id: 1
  },
  {
    comment_body: 'user 3 post 19',
    user_id: 3,
    post_id: 19
  },
  {
    comment_body: 'user 5 post 3',
    user_id: 5,
    post_id: 3
  },
  {
    comment_body: 'user 10 post 14',
    user_id: 10,
    post_id: 14
  },
  {
    comment_body: 'user 10 post 8',
    user_id: 10,
    post_id: 8
  },
  {
    comment_body: 'user 10 post 11',
    user_id: 10,
    post_id: 11
  },
  {
    comment_body: 'user 8 post 5',
    user_id: 8,
    post_id: 5
  },
  {
    comment_body: 'user 8 post 19',
    user_id: 8,
    post_id: 19
  },
  {
    comment_body: 'user 9 post 19',
    user_id: 9,
    post_id: 19
  },
  {
    comment_body:'user 5 post 4',
    user_id: 5,
    post_id: 4
  },
  {
    comment_body:'user 2 post 11',
    user_id: 2,
    post_id: 11
  },
  {
    comment_body: 'user 4 post 6',
    user_id: 4,
    post_id: 6
  },
  {
    comment_body: 'user 9 post 6',
    user_id: 9,
    post_id: 6
  },
  {
    comment_body:'user 7 post 9',
    user_id: 7,
    post_id: 9
  },
  {
    comment_body: 'user 4 post 19',
    user_id: 4,
    post_id: 19
  },
  {
    comment_body: 'user 10 post 1',
    user_id: 10,
    post_id: 1
  },
  {
    comment_body:'user 2 post 19',
    user_id: 2,
    post_id: 19
  },
  {
    comment_body: 'user 10 post 1',
    user_id: 10,
    post_id: 1
  },
  {
    comment_body: 'user 10 post 12',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
