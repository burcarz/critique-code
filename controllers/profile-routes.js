// Constants
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');


router.get('/', (req,res) => {

    // GET /profile   Find all posts?  Not sure what we want on this page
    Post.findAll({
        // TODO: will need to adjust   add upvote and downvote
        where: {
          // use the ID from the session
          user_id: req.session.user_id
        },
        attributes: [
          'id',
          'title',
          'body', 
          'post_url',
          'created_at'
       
        ],
        include: [
          {
            model: Comment,
            attributes: ['id', 'comment_body', 'post_id', 'user_id', 'created_at'],
            include: {
              model: User,
              attributes: ['username']
            }
          },
          {
            model: User,
            attributes: ['username']
          }
        ]
      })
        .then(dbPostData => {
    
          // serialize data before passing to template
          const posts = dbPostData.map(post => post.get({ plain: true }));

          res.render('dashboard', { posts, loggedIn: true });
  
        })
        .catch(err => {
            // Server error
          console.log(err);
          res.status(500).json(err);
        });
   


});


module.exports = router;