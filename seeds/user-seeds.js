const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'Bobby',
    email: 'bobby@bradybunch.com',
    github: 'burcarz', 
    title: 'Senior Developer',
    bio: `God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. So you two dig up, dig up dinosaurs? I was part of something special. Eventually, you do plan to have dinosaurs on your dinosaur tour, right? They're using our own satellites against us. And the clock is ticking.`,
    upvoted_posts:{}, 
    downvoted_posts:{}, 
    password: 'password123'
  },
  {
    username: 'Cindy',
    email: 'cindy@bradybunch.com',
    github: 'cindy',
    title: `Developer`,
    bio:`Just my luck, no ice. Checkmate... Checkmate... You really think you can fly that thing? They're using our own satellites against us. And the clock is ticking. God help us, we're in the hands of engineers. Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.`, 
    upvoted_posts:{}, 
    downvoted_posts:{}, 
    password: 'password123'
  },
  {
    username: 'Marsha',
    email: 'marsha@bradybunch.com',
    github: 'marsha', 
    title: `Developer`,
    bio:`Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Did he just throw my cat out of the window? So you two dig up, dig up dinosaurs? Must go faster... go, go, go, go, go! This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows.`, 
    upvoted_posts:{}, 
    downvoted_posts:{}, 
    password: 'password123'
  },
  {
    username: 'Peter',
    email: 'peter@bradybunch.com',
    github: 'peter', 
    title: `Developer`,
    bio:`Jaguar shark! So tell me - does it really exist? You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? You know what? It is beets. I've crashed into a beet truck. Remind me to thank John for a lovely weekend.`, 
    upvoted_posts:{}, 
    downvoted_posts:{}, 
    password: 'password123'
  },
  {
    username: 'Jan',
    email: 'jan@bradybunch.com',
    github: 'jan', 
    title: `Senior Developer`,
    bio:`They're using our own satellites against us. And the clock is ticking. Jaguar shark! So tell me - does it really exist? So you two dig up, dig up dinosaurs? Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.`, 
    upvoted_posts:{}, 
    downvoted_posts:{}, 
    password: 'password123'
  },
  {
    username: 'Greg',
    email: 'greg@bradybunch.com',
    github: 'boddy', 
    title: `Developer`,
    bio:`Hey, take a look at the earthlings. Goodbye! So you two dig up, dig up dinosaurs? You know what? It is beets. I've crashed into a beet truck. You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows.`, 
    upvoted_posts:{}, 
    downvoted_posts:{}, 
    password: 'password123'
  },
  {
    username: 'Alice',
    email: 'alice@bradybunch.com',
    github: 'alice', 
    title: `Intern`,
    bio:`You know what? It is beets. I've crashed into a beet truck. Did he just throw my cat out of the window? Eventually, you do plan to have dinosaurs on your dinosaur tour, right? God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs.`, 
    upvoted_posts:{}, 
    downvoted_posts:{}, 
    password: 'password123'
  },
  {
    username: 'Sam',
    email: 'sam@bradybunch.com',
    github: 'sam', 
    title: `Senior Developer`,
    bio:`You know what? It is beets. I've crashed into a beet truck. Life finds a way. Must go faster. Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.`, 
    upvoted_posts:{}, 
    downvoted_posts:{}, 
    password: 'password123'
  },
  {
    username: 'Mike',
    email: 'mike@bradybunch.com',
    github: 'mike', 
    title: `Junior Developer`,
    bio:`What do they got in there? King Kong? Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! Must go faster... go, go, go, go, go! So you two dig up, dig up dinosaurs? You know what? It is beets. I've crashed into a beet truck.`, 
    upvoted_posts:{}, 
    downvoted_posts:{}, 
    password: 'password123'
  },
  {
    username: 'Carol',
    email: 'carol@bradybunch.com',
    github: 'carol', 
    title: `Junior Developer`,
    bio:`You really think you can fly that thing? God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.`, 
    upvoted_posts:{}, 
    downvoted_posts:{}, 
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
