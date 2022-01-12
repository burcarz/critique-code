// Constants
const router = require('express').Router();
const { Comment }    = require('../../models');


// GET /api/comments/  Get all comments
router.get('/', (req, res) => {
    Comment.findAll({
        
    })

    .then(dbCommentData => {
        res.json(dbCommentData);

    })
    .catch(err => {
        // Server error
        console.log(err);
        res.status(500).json(err);
    });

});

// GET /api/comments/1 Get a specific comment by id
router.get('/:id', (req,res) => {
    Comment.findOne({
        where: {
            id:req.params.id
        }
    })
    .then(dbCommentData => {
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/comments/   Post a new comment
router.post('/', (req, res) => {
    if(req.session) {
        Comment.create({
            post_id: req.body.post_id,
            comment_text: req.body.comment_text,
            // Get the id from the session
            user_id: req.session.user_id
        })
        .then(dbCommentData => {
            res.json(dbCommentData);
        })
        .catch(err => {
            // Comment not found
            console.log(err);
            res.status(400).json(err);
        });
    }
});

// DELETE /api/comments/1     Delete a comment by id
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id:req.params.id
        }
    })
    .then(dbCommentData => {
        if(!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id'});
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        // Server error
        console.log(err);
        res.status(500).json(err);
    });

});




module.exports = router;