// function to create a new post
async function createPostHandler(event) {
    event.preventDefault();
    

    const title = document.querySelector('input[name="post-title"').value;
    const post_body = document.querySelector('textarea[name="post-body"]').value;

    //TODO: Fix hardcoded
    const tag_genre = 'Funny';
    const tag_language = 'Java';

    if(title && post_body) {

        const response = await fetch('../api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                post_body,
                tag_genre,
                tag_language,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('success');
            document.location.replace('/profile');
        } else {
            console.log('failed to create post');
        }
    }
    
}
document.querySelector('.new-post-form').addEventListener('submit', createPostHandler);
