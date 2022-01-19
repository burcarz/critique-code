const router = require('express').Router();
// Include User so we can get user info from the user_id foreign key
// to join them together
const { Post, User, Comment }  = require('../../models');

const withAuth = require('../../utils/auth');
// // Search for Advice tag_genre and rank DESC
router.get('/adviceranked', (req, res) => {
  Post.findAll({
   
    where: {
     tag_genre:'Advice'
    },
    attributes: [
      'id', 
      'post_body', 
      'title', 
      'created_at',
      'vote_count',
      'user_id',
      'tag_genre',
      'tag_language'

    ],
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
    ],
    order: [['vote_count', 'DESC']]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this genre' });
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

// // Search for Advice tag_genre and rank DESC
router.get('/funnyranked', (req, res) => {
  Post.findAll({
   
    where: {
     tag_genre:'Funny'
    },
    attributes: [
      'id', 
      'post_body', 
      'title', 
      'created_at',
      'vote_count',
      'user_id',
      'tag_genre',
      'tag_language'

    ],
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
    ],
    order: [['vote_count', 'DESC']]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this genre' });
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



// // Search for Advice tag_genre
router.get('/advice', (req, res) => {
  Post.findAll({
    where: {
      tag_genre:'Advice'
    },
    attributes: [
      'id', 
      'post_body', 
      'title', 
      'created_at',
      'vote_count',
      'user_id',
      'tag_genre',
      'tag_language'

    ],
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
        res.status(404).json({ message: 'No post found with this genre' });
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


// // Search for Advice tag_genre
router.get('/funny', (req, res) => {
  Post.findAll({
    where: {
      tag_genre:'Funny'
    },
    attributes: [
      'id', 
      'post_body', 
      'title', 
      'created_at',
      'vote_count',
      'user_id',
      'tag_genre',
      'tag_language'

    ],
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
        res.status(404).json({ message: 'No post found with this genre' });
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

// GET /api/posts/      Get all posts in the db
router.get('/', (req, res) => {

    Post.findAll({
        //Query config
        attributes: [
          'id', 
          'post_body', 
          'title', 
          'created_at',
          'vote_count',
          'user_id',
          'tag_genre',
          'tag_language'
        ],
        // We could use 
      //  order: [['created_at', 'DESC']],
        include: [
  
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
      attributes: [
        'id', 
        'post_body', 
        'title', 
        'created_at',
        'vote_count',
        'user_id',
        'tag_genre',
        'tag_language'
      ],
      include: [
        {
          model: User,
          attributes: [
            'username'
          ]
        }
      ], 
      include: [
        {
        model: Comment,
        attributes: [
          'id',
          'comment_body'
        ]
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

// Search by language tag, will get all posts with said tag name
router.get('/tag/:tag_language', (req, res) => {
  Post.findAll({
    where: {
      tag_language: req.params.tag_language
    }, 
    attributes: [
      'id',
      'post_body',
      'title',
      'created_at',
      'vote_count',
      'user_id',
      'tag_genre',
      'tag_language'
    ],
    include: [
      {
        model: User,
        attributes: [
          'username'
        ]
      }
    ],
    include: [
      {
        model: Comment,
        attributes: [
          'id',
         'comment_body'
        ]
      }
    ]
  })
    .then(dbPostData => {
      if(!dbPostData) {
        res.status(404).json({ message: 'No post found with this language tag' });
        return;
      }
      res.json(dbPostData);
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// POST /api/post/       CREATE POST
  router.post('/',withAuth, (req, res) => {
    Post.create({
      
      title: req.body.title,
      post_body: req.body.post_body,
      user_id: req.session.user_id,
      tag_genre: req.body.tag_genre,
      tag_language: req.body.tag_language
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
  router.put('/:id', withAuth, (req, res) => {
    Post.update(
      {
        title: req.body.title,
        post_body: req.body.post_body,
        user_id: req.session.user_id,
        tag_genre: req.body.tag_genre,
        tag_language: req.body.tag_language
  
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
router.put('/upvote/:id',withAuth, (req, res) => {
  Post.increment(
    'vote_count',
    {
      by: 1,
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
  });
});

router.put('/downvote/:id',withAuth, (req, res) => {
  Post.decrement(
    'vote_count',
    {
      by: 1,
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
  });
});

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