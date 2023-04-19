// Constants
const express = require('express');
const routes = require('./controllers');
//const helpers = require('./utils/helpers');

const path = require('path');




// Hide credentials.
require('dotenv').config();

// Setup handlebars
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers })



// Setup express
const app = express();
const PORT = process.env.PORT || 3001;

// Setup sessions/and session-sequelize
const session = require('express-session');
const sequelize = require('./config/connection');
const sequelizeStore = require('connect-session-sequelize')(session.Store);


const sess = {
    // We will need to set this up in heroku as a key pair
    secret: process.env.SESSION_PW,
    cookie: {},
    resave: false,
    saveUnitialized: true,
    store: new sequelizeStore({
        db: sequelize
    })
};

// Startup session store
app.use(session(sess));

// start up app for handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware for handling json and urls
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// static path for public resources
app.use(express.static(path.join(__dirname, 'public')));

// setup app to use routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on${PORT}`));
})