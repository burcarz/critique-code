// Constants
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');



// GET /dashboard/ gets all posts while logged in
router.get('/', (req,res) => {

  Post.findAll({
      where: {
        // use the ID from the session
       // user_id: req.session.user_id
       // TODO: going to have to hardcode until login is working right
      // id: 1
      user_id: 1
      },
      attributes: [
        'id',
        'title',
        'post_body',
        'vote_count',
        'user_id',
        'tag_genre',
        'tag_language',
        'created_at'
   
      ],
      include: [
        {
          model: Comment,
          attributes: [
            'id',
            'comment_body',
            'user_id',
            'post_id', 
            'created_at'
              ],
          include: {
            model: User,
            attributes: [
              'id',
              'username',
              'email',
              'password'  
              
            ]
          }
        },
        {
          model: User,
          attributes: [
            'id',
            'username',
            'email',
            'password' 
          ]
        }
      ]
    })
      .then(dbPostData => {
         
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));
   
        // Render dashboard with posts
        res.render('profile', { posts, loggedIn: true });
       console.log(posts)
      
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});


// GET /signup Check to see if logged in, if not send to signup page
router.get('/create-post', (req, res)=> {
  // if they are logged in redirect to a homepage if one exists.
  // if (req.session.loggedIn) {
  //     res.redirect('/');
  //     return;
  // }
  // no variables need to be passed so only the page name
  res.render('create-post');
});



module.exports = router;