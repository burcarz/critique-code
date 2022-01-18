const voteClickHandler = async function(postId) {
    
    console.log(postId);
    const response = await fetch(`/api/posts/vote/${postId}`, {
        method: 'PUT',
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

window.onload = function() {
    document.querySelector('up-vote-icon').addEventListener('click', voteClickHandler)
}