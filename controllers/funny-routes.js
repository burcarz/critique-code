// Constants
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// POST /funny     Get all funny tagged 
router.get('/', (req,res) => {

    // GET /profile   Find all posts?  Not sure what we want on this page
    Post.findAll({
        // TODO: I am not sure what data you want for this page? Right now it 
        // pulls your posts
        where: {
          // use the Tag to sort.
          // TODO:  Is the model changed  yet?
          tag_genre: 'Funny'
        },
        attributes: [
          'id',
          'title',
          'post_body',
          'vote_count',
          'created_at',
          'tag_language',
          'tag_genre'
       
        ],
        include: [
          {
            model: Comment,
            attributes: [
              'id', 
              'comment_body', 
              'post_id', 
              'user_id', 
              'created_at'],
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

          res.render('funny', { posts, loggedIn: req.session.loggedIn });
  
        })
        .catch(err => {
            // Server error
          console.log(err);
          res.status(500).json(err);
        });
   


});


module.exports = router;