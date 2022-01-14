const voteClickHandler = async function(event) {
    event.preventDefault();
    const postId = document.getElementById('id-val').innerHTML;

    // console.log(postId);
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
    // const response = fetch('/api/posts/:id', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    document.querySelector('vote-btn').addEventListener('click', voteClickHandler);
}