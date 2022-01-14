// Constants 
const router = require('express').Router();
// Shortens routes.
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const profileRoutes = require('./profile-routes');
const adviceRoutes = require('./advice-routes');
const funnyRoutes = require('./funny-routes');


// Direct the router for each route
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/profile', profileRoutes);
router.use('/advice', adviceRoutes);
router.use('/funny', funnyRoutes);




// This router.use is to catch all passthrough and 404's them.
router.use((req, res)=> {
    res.status(404).end();
});


module.exports = router;