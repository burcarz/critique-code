// creates a comment and stores it in the database.
async function createCommentHandler(event) {
    event.preventDefault();
    
    const comment_body = document.querySelector('textarea[name="comment-text"]').value;

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if(comment_body) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {
            console.log(comment_body);
            console.log(post_id);
            document.location.reload();
        } else {
            console.log('failed to create comment');
        }
    } 
}

document.querySelector('.comment-form').addEventListener('submit', createCommentHandler);