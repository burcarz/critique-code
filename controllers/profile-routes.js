// Constants
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', (req,res) => {
  // if they are  not logged in redirect to a homepage if one exists.
 Post.findAll({
     where: {
       // use the ID from the session
       user_id: req.params.id
   
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
             'github',
             'bio',
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
           'github',
           'bio',
           'avatar',
           'email',
           'password' 
         ]
       }
     ]
   })
     .then(dbPostData => {
      // console.table(dbPostData);
        
       // serialize data before passing to template
       const posts = dbPostData.map(post => post.get({ plain: true }));
  
       // Render dashboard with posts
       res.render('public-profile', { posts });
   
     })
     .catch(err => {
       console.log(err);
       res.status(500).json(err);
     });
});

// GET /dashboard/ gets all posts while logged in
router.get('/', (req,res) => {
   // if they are  not logged in redirect to a homepage if one exists.
   if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  Post.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
    
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
              'github',
              'bio',
              'title',
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
            'github',
            'bio',
            'title',
            'avatar',
            'email',
            'password' 
          ]
        }
      ]
    })
      .then(dbPostData => {
       // console.table(dbPostData);
         
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));
   
        // Render dashboard with posts
        res.render('profile', { posts, loggedIn: true });
    
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});


// GET /create-post  Check to see if logged in, if not send to home page
router.get('/create-post',withAuth, (req, res)=> {
  // if they are  not logged in redirect to a homepage if one exists.
  if (!req.session.loggedIn) {
      res.redirect('/');
      return;
  }
  // no variables need to be passed so only the page name
  res.render('create-post', {loggedIn: true});
});


// GET /edit-post  Check to see if logged in, if not send to home page
router.get('/edit-post',withAuth, (req, res)=> {
  // if they are  not logged in redirect to a homepage if one exists.
  if (!req.session.loggedIn) {
      res.redirect('/');
      return;
  }
  // no variables need to be passed so only the page name
  res.render('edit-post', {loggedIn: true});
});

// POST /profile/edit/1   logged in to edit posts 

router.get('/edit/:id',withAuth,  (req,res) => {
  Post.findOne({
      where: {
          id:req.params.id
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
            // include comment model here:
            {
              // comment model has the user model itself so it can attach the username to the comment
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
      if(!dbPostData) {
          res.status(404).json({ message: 'No post found wit this id'});
          return;
      }
   
     const post = dbPostData.get({ plain: true});

     res.render('edit-post', {
         post, 
         loggedIn: true
     });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});



module.exports = router;