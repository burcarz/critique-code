// function to create a new post
async function createPostHandler(event) {
    event.preventDefault();
    alert('In createPostHandler');

    const title = document.querySelector('input[name="post-title"').value;
    const body = document.querySelector('textarea[name="post-body"]').value;

    alert( title);
    alert( body);

    if(title && body) {

        const response = await fetch('api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                body,
                //TODO: login needs to work 
                //user_id: 1
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('success');
        } else {
            console.log('failed to create post');
        }
    }
    
}

document.querySelector('.new-post-form').addEventListener('submit', createPostHandler);