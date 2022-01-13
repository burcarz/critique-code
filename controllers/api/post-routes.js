const router = require('express').Router();
// Include User so we can get user info from the user_id foreign key
// to join them together
const { Post, User, Comment }  = require('../../models');


// GET /api/posts/      Get all posts in the db
router.get('/', (req, res) => {

    Post.findAll({
        //Query config
        attributes: [
          'user_id', 
          'vote_count', 
          'title',
          'post_body', 
          'created_at'
        ],
        // We could use 
      //  order: [['created_at', 'DESC']],
        include: [
            // TODO: Will most likely need to be adjusted
            {
              model: Comment,
              attributes: [
                'id', 
                'comment_body',
                'post_id',
                'user_id',
                'created_at'
              ],
              // Attach the username to the comment
              include: {
                model:User,
                attributes: ['username']
              }

            },
            {   // User who posted
                model: User, 
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        // Server error                       
        console.log(err);
        res.status(500).json(err);
    });
});

// GET /api/post/1     Get specific post by id
router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'post_url', 'title', 'created_at'],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ], 
      include: [
        {
        model: Comment,
        attributes: ['id', 'comment_body']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
          // Server error
        console.log(err);
        res.status(500).json(err);
      });
  });

// POST /api/post/       CREATE POST
  router.post('/', (req, res) => {
    Post.create({
        // TODO: will need to be changed
      title: req.body.title,
      post_body: req.body.post_body,
      post_url: req.body.post_url,
      user_id: req.body.user_id
    })
      .then(dbPostData =>  {
          res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

 
// PUT /api/post/1       Update a post by ID
  router.put('/:id', (req, res) => {
    Post.update(
      {
        title: req.body.title,
        post_url: req.body.post_url
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// TEST VOTE ROUTE  _____ CHANGES VOTE COUNT
router.put('/vote/:id', (req, res) => {
  Post.update(
    {
      vote_count: req.params.vote_count + 1
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbPostData => {
    console.log(dbPostData);
    if (!dbPostData) {
      res.json(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(dbPostData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

// DELETE /api/post/1      Delete a post by id
  router.delete('/:id', (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });



module.exports = router;