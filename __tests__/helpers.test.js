const { Post } = require('../models');
const { sortPosts,
    getMostVoted,
    getAdvicePosts,
    getFunnyPosts } = require('../utils/helpers');
// returns array of posts based on vote-count
test(`returns a filtered array based on vote_count`, () => {
    const posts = 
    [{title: 'title 1', post_body: 'post body 1', vote_count: 40},
    {title: 'title 2', post_body: 'post body 2', vote_count: 10},
    {title: 'title 3', post_body: 'post body 3', vote_count: 2}];


    expect(sortPosts(posts)).toEqual(expect.arrayContaining([
        expect.objectContaining({title: 'title 1', post_body: 'post body 1', vote_count: 40}),
        expect.objectContaining({title: 'title 2', post_body: 'post body 2', vote_count: 10})
    ]));
});
// returns post with most upvotes
test('returns post with most upvotes', () => {
    const posts = 
    [{title: 'title 1', post_body: 'post body 1', vote_count: 40},
    {title: 'title 2', post_body: 'post body 2', vote_count: 10},
    {title: 'title 3', post_body: 'post body 3', vote_count: 2}];

    expect(getMostVoted(posts)).toEqual(expect.arrayContaining([
        expect.objectContaining({
        title: 'title 1', post_body: 'post body 1', vote_count: 40})
    ]));
})
// returns post the matches advice tag
test('returns posts with advice tag', () => {
    const posts =
    [{title: 'title 1', post_body: 'post body 1', vote_count: 40, tag: "advice"},
    {title: 'title 2', post_body: 'post body 2', vote_count: 10, tag: "advice"},
    {title: 'title 3', post_body: 'post body 3', vote_count: 2, tag: "funny"}];

    expect(getAdvicePosts(posts)).toEqual(expect.arrayContaining([
        expect.objectContaining({
            title: 'title 1', post_body: 'post body 1', vote_count: 40, tag: "advice"}),
        expect.objectContaining({
            title: 'title 2', post_body: 'post body 2', vote_count: 10, tag: "advice"
        })
    ]))
})
// returns posts that match the funny tag
test('returns posts with advice tag', () => {
    const posts =
    [{title: 'title 1', post_body: 'post body 1', vote_count: 40, tag: "funny"},
    {title: 'title 2', post_body: 'post body 2', vote_count: 10, tag: "funny"},
    {title: 'title 3', post_body: 'post body 3', vote_count: 2, tag: "advice"}];

    expect(getFunnyPosts(posts)).toEqual(expect.arrayContaining([
        expect.objectContaining({
            title: 'title 1', post_body: 'post body 1', vote_count: 40, tag: "funny"}),
        expect.objectContaining({
            title: 'title 2', post_body: 'post body 2', vote_count: 10, tag: "funny"
        })
    ]))
})