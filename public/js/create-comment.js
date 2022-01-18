// creates a comment and stores it in the database.
async function createCommentHandler(event) {
    event.preventDefault();
    
    const commentForm = document.querySelector('.comment-form');
    const comment_body = document.querySelector('textarea[name="comment-text"]').value;

    if(comment_body) {
        const response = await fetch('../api/comments', {
            method: 'POST',
            body: JSON.stringify({
                comment_body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {
            console.log('success');
            document.location.reload();
        } else {
            console.log('failed to create comment');
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', createCommentHandler);