// function to edit existing posts
async function editPostHandler(event) {
    event.preventDefault();

    alert("in editPostHandler");
    const title = document.querySelector('input[name="post-title"').value;
    const post_body = document.querySelector('textarea[name="post-body"]').value;

    alert( title);
    alert( post_body);
    const tag_genre = 'Funny';
    const tag_language = 'Java';

    if(title && body) {
        const response = await fetch('../api/posts', {
            method: 'PUT',
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
            document.location.replace('/profile')
        } else {
            console.log('failed to edit post');
        }
    }
}
// Might need 'click' instead of 'submit'
document.querySelector('.update-post-btn').addEventListener('click', editPostHandler);