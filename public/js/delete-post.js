// function that deletes post
// will probably add better confirmation method
async function deletePostHandler(event) {
    event.preventDefault();

    window.confirm('are you sure you want to delete this post?');

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        console.log('success');
        document.location.replace('/profile');
    } else {
        console.log('failed to delete');
    }
}

document.querySelector('.delete-post-btn').addEventListener('click', deletePostHandler);