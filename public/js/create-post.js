async function createPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"').value;
    const body = document.querySelector('input[name="post_body"]').value;

    const response = await fetch('api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}