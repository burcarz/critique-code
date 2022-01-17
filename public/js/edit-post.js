// function to edit existing posts
async function editPostHandler(event) {
    event.preventDefault();

    alert("in editPostHandler");
    const title = document.querySelector('input[name="post-title"').value;
    const body = document.querySelector('textarea[name="post-body"]').value;

    alert( title);
    alert( body);

    if(title && body) {
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
}
// Might need 'click' instead of 'submit'
document.querySelector('.update-post-btn').addEventListener('click', editPostHandler);