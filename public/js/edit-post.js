async function editPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"').value;
    const body = document.querySelector('input[name="post_body"]').value;

    const response = await fetch('api/posts', {
        method: 'PUT',
        body: JSON.stringify({
            title,
            body
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        console.log('success');
    } else {
        console.log('failed to edit post');
    }
}
// Might need 'click' instead of 'submit'
document.querySelector('#edit-btn').addEventListener('submit', editPostHandler);