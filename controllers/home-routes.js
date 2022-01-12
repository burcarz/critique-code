// Constants 
const sequelize = require('..config/connection');
const { User, Post, Comment } = require('../models');

const router = require('express').Router();

 
/** Render homepage and pass posts data to it.
// TODO: We will need to add Best bad post, and best good answer
*/
router.get('/', (req, res) => {
    Post.findALL({

    })
    .then(dbPostData => {
        // serialize the post data
        const posts = dbPostData.map( post => post.get({ plain : true }));
        //TODO: This will need to be changed
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        // Server error
        console.log(err);
        res.status(500).json(err);
    });

});

router.get('/login', (req, res)=> {
    // if they are logged in redirect to a homepage if one exists.
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    // if not logged in, direct to login
    res.render('login');
});

router.get('/signup', (req, res)=> {
    // if they are logged in redirect to a homepage if one exists.
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    // if not logged in, direct to signup page.
    res.render('signup');
});
/** Get a specific post by id
 * 
 */
router.get('/post/:id', (req,res) => {
   
    Post.findOne({
        // TODO: Will have to be redon for sure.
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'created_at',
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
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
        if(!dbPostData) {
            res.status(404).json({ message: 'No post found with this id'});
            return;
        }
        // serialize data
        const post = dbPostData.get({ plain: true });

        // pass data to template
        // also pass if the user is logged in
        res.render('single-post', { 
            post,
            loggedIn: req.session.loggedIn
        
        });
    })
    .catch(err => {
        // Server error
        console.log(err);
        res.status(500).json(err);
    })

    
});



module.exports = router;