
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
    }
}