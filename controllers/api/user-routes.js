// Constants
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

const withAuth = require('../../utils/auth');

// GET /api/users findAll function
router.get('/', (req, res) => {
    
    User.findAll({
       // Don't send back the password
      // attributes: { exclude: ['password']}
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err=> {
        // Server error
        console.log(err);
        res.status(500).json(err);
    });
});

// GET /api/users/1 get one post by id
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
          id: req.params.id
        },
        include: [
          {
            model: Post,
            attributes: [
              'id', 
              'title',
              'post_body',
              'created_at'
            ]
          },
          {
            model: Comment,
            attributes: [
              'id', 
              'comment_body',
              'created_at'
            ],
            // Show which posts the users commented on
            include: {
              model: Post,
              attributes: ['title']
            }
          },
          {
            model: Post,
            attributes: ['title'],
          
          }
        ]
      })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
            // Server error
          console.log(err);
          res.status(500).json(err);
        });
});

// POST /api/users create a new user
router.post('/', (req, res) => {
   // TODO: will need to adjust
  User.create({
    username: req.body.username,
    email: req.body.email,
    github: req.body.github,
    upvoted_posts: req.body.upvoted_posts,
    downvoted_posts: req.body.downvoted_posts,
    password: req.body.password
  })
  
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch(err => {
        // Server error
      console.log(err);
      res.status(500).json(err);
    });
});
// POST /api/users/login  login
router.post('/login', (req, res) => {
 
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that username!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
  
      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});


// POST /api/users/logout   Logout
router.post('/logout', (req, res)=> {
  // if they are logged in destroy the session
  if (req.session.loggedIn) {
     req.session.destroy(() => {
         res.status(204).end();
     });
     
  } else {
      // Already not logged in
      res.status(404).end();

  }
 
});

// PUT /api/users/1  Update a user's info by id
router.put('/:id',withAuth, (req, res) => {
 
  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// DELETE /api/users/1 Delete post by ID
router.delete('/:id',withAuth,  (req, res) => {
    User.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

module.exports = router;