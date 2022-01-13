// DOESN'T WORK RIGHT NOW
// Supposed to be a put request that vote by 1
async function voteCLickHandler(event) {
    event.preventDefault();

    const postId = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const voteCount = document.getElementById('vote-val').innerHTML;
    console.log(voteCount);
    // console.log(postId);
    const response = await fetch(`/api/posts/vote/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            vote_count: voteCount
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok) {
        console.log('success');
    } else {
        console.log('vote failed to seed')
    }
}

document.querySelector('.vote-btn').addEventListener('click', voteCLickHandler);