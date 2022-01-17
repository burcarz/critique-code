// Constants
const router = require('express').Router();
const { Comment }    = require('../../models');

const withAuth = require('../../utils/auth');


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
router.post('/', withAuth, (req, res) => {
    if(req.session) {
        Comment.create({
            post_id: req.body.post_id,
            comment_body: req.body.comment_body,
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

// PUT /api/comments/   Update  a  comment
router.put('/', withAuth, (req, res) => {
    if(req.session) {
        Comment.update({
            post_id: req.body.post_id,
            comment_body: req.body.comment_body,
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
router.delete('/:id', withAuth, (req, res) => {
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