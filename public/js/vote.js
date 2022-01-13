async function voteCLickHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch('/api/posts/:id', {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id,
            vote_count: 1++
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