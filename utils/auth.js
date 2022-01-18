/**
 *  Function: withAuth
 *  verifies the user is logged in before continuing        
 * @param {req.session.user_id} req 
 * @param {*} res 
 * @param {*} next 
 */

const withAuth = (req, res, next) => {
    if(!req.session.user_id) {
        // not logged in therefore direct to login
        res.redirect('/');
    } else {
        // if logged in move to next function
        next();
    }
}

module.exports = withAuth;