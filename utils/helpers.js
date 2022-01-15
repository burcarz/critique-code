
module.exports = {
    // a filter function that returns posts above vote threshold
    sortPosts: posts => {
        return posts.filter(post => post.vote_count >= 3);
    },
    getMostVoted: posts => {
        return posts.filter(post => Math.max(post.vote_count));
    },
    getAdvicePosts: posts => {
        return posts.filter(post => post.tag === "advice");
    },
    getFunnyPosts: posts => {
        return posts.filter(post => post.tag === "funny")
    },
}

// module.exports = Handlebars.registerHelper('getMostVoted', (posts, opt) => {
//     let results = '';
//     posts.filter(post => {
//         results += opt.fn(post)
//     });
//     return results;
// })