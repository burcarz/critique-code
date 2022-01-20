const { Comment } = require('../models');

const commentdata = [
  {
    comment_body: 'Looking fine! Ideally we would not store userdata in an array of objects, but as a place holder its not bad.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_body: 'Gotta love C++ syntax lol',
    user_id: 6,
    post_id: 8
  },
  {
    comment_body: 'Yeah, that cant be right.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_body: ' Selection is defined before its called on the custom-text-selection, so it does that thing.',
    user_id: 3,
    post_id: 18
    
  },
  {
    comment_body: 'Syntax wise, they are really similar. Which is a good thing, but at the same time, you could get some things mixed up. But as a Java developer, you should have no issues getting used to it.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_body: 'I have often wondered that too when date formatting. Anyone have an idea of why this is?',
    user_id: 1,
    post_id: 20
  },
  {
    comment_body: '.... Your CTO is forcing you to do WHAT?',
    user_id: 6,
    post_id: 7
  },
  {
    comment_body: 'Thats part of the syntax of the new lambda expressions, to be introduced in Java 8.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_body: 'Wait, is the java.util.Date a library that is being reassigned here?',
    user_id: 6,
    post_id: 12
  },
  {
    comment_body: 'No idea why its like that, but I just use it anyways and it works',
    user_id: 6,
    post_id: 20
  },
  {
    comment_body: 'If you dont need to worry about speed, probably a good choice haha',
    user_id: 3,
    post_id: 14
  },
  {
    comment_body: 'Someone already mentioned what it does, but does anyone have links to how this would work in more detail?',
    user_id: 5,
    post_id: 4
  },
  {
    comment_body: 'If you are trying to get it into production, you need a db. Full stop. If it is for prototyping youre good.',
    user_id: 4,
    post_id: 9
  },
  {
    comment_body:'Just differences in syntax bro ;)',
    user_id: 5,
    post_id: 14
  },
  {
    comment_body: 'Same lol',
    user_id: 6,
    post_id: 2
  },
  {
    comment_body: 'Just try not to get caught.',
    user_id: 8,
    post_id: 2
  },
  {
    comment_body:'In the same boat as the rest of you',
    user_id: 2,
    post_id: 20
  },
  {
    comment_body: 'Normally we would just import the date library and just call it from main or other methods.',
    user_id: 4,
    post_id: 11
  },
  {
    comment_body:'Basically public means that you will be able to use it global rather than when private, they can only be accessed by individual object instances.',
    user_id: 5,
    post_id: 13
  },
  {
    comment_body:'So would map be like, formatting the values?',
    user_id: 9,
    post_id: 16
  },
  {
    comment_body: 'Basically, the -> separates the parameters (left-side) from the implementation (right side).',
    user_id: 6,
    post_id: 4
  },
  {
    comment_body: 'The commas are just indicating what the input will accept.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_body: 'Python might take a bit to get used to, but just imagine being the person above you and being forced to use PHP lol',
    user_id: 3,
    post_id: 8
  },
  {
    comment_body:'Other user answered, just wanted to comment to seem smart :)',
    user_id: 8,
    post_id: 10
  },
  {
    comment_body:'You are forgetting a curly bracket I reckon.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_body: 'I would say that this checks out. If you arent getting any css errors then you should be good :)',
    user_id: 5,
    post_id: 3
  },
  {
    comment_body: 'Yeah it is the curly bracket. Right after you declare the loop',
    user_id: 1,
    post_id: 15
  },
  {
    comment_body: 'The map() function executes a specified function for each item in an iterable. The item is sent to the function as a parameter.',
    user_id: 4,
    post_id: 16
  },
  {
    comment_body: 'That kind of looks regex? I could be wrong though.',
    user_id: 4,
    post_id: 18
  },
  {
    comment_body: 'Commas :^) hehe',
    user_id: 4,
    post_id: 10
  },
  {
    comment_body: 'Dont make fun of Java, I use it every day ;-; it is my favorite programming language',
    user_id: 7,
    post_id: 5
  },
  {
    comment_body: 'I never knew that javascript arrays could be used with the find function',
    user_id: 10,
    post_id: 1
  },
  {
    comment_body: 'Regex, 90% sure',
    user_id: 3,
    post_id: 19
  },
  {
    comment_body: 'Does the checkbox-symbol corrilate with something in the container?',
    user_id: 5,
    post_id: 3
  },
  {
    comment_body: 'I mean, C++ isnt that bad if you are doing game stuff. Most of the time you can get away with just unity or some other language, but for making something like a game engine, you should probably learn C++.',
    user_id: 10,
    post_id: 14
  },
  {
    comment_body: 'So since its a map call, int would be a function I reckon',
    user_id: 10,
    post_id: 8
  },
  {
    comment_body: 'That would be correct, first child is an element inside of the checkbox div.',
    user_id: 10,
    post_id: 11
  },
  {
    comment_body: 'You are just getting a bunch of different objects as arguments?',
    user_id: 8,
    post_id: 5
  },
  {
    comment_body: 'HTML is virtually composed of strings, and what makes regular expression so powerful is, a regular expression can match different strings. Admittedly, a regular expression is not the first choice to correctly parse HTML, because there are some common mistakes such as missing closing tags, mismatching some tags, etc',
    user_id: 8,
    post_id: 19
  },
  {
    comment_body: 'A regular expression (sometimes called a rational expression) is a sequence of characters that define a search pattern, mainly for use in pattern matching with strings, or string matching, i.e. "find and replace"-like operations.',
    user_id: 9,
    post_id: 19
  },
  {
    comment_body:'Welcome to Java, friend.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_body:'Yeah so, this syntax is quite normal. With the second class call, we are getting the svg specifically in the first child.',
    user_id: 2,
    post_id: 11
  },
  {
    comment_body: 'You bought into the C++ meme didnt you...?',
    user_id: 4,
    post_id: 6
  },
  {
    comment_body: 'C++ has nothing to do with memes.',
    user_id: 9,
    post_id: 6
  },
  {
    comment_body:'I gave up C++. I prefer C# but understand why people still prefer it.',
    user_id: 7,
    post_id: 9
  },
  {
    comment_body: 'Ah yes, regex. My mind trembles.',
    user_id: 4,
    post_id: 19
  },
  {
    comment_body: 'Always nice to see new people coming t JavaScript',
    user_id: 10,
    post_id: 1
  },
  {
    comment_body:'Unpopular opinion but I actually like regex lol',
    user_id: 2,
    post_id: 19
  },
  {
    comment_body: 'Oops, made a typeo. to**',
    user_id: 10,
    post_id: 1
  },
  {
    comment_body: 'Dumb question, and kind of unrealated, but can you use regex in Java?',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
