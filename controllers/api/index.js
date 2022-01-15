// Constants 

const router = require('express').Router();

// Routes
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
//const tagRoutes = require('./tag-routes');

// Router directions
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
//router.use('/tag/', tagRoutes);


module.exports = router;
