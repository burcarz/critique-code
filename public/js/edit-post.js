// function to edit existing posts
async function editPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"').value;
    const post_body = document.querySelector('textarea[name="post-body"]').value;

    //TODO: fix hardcoded
    const tag_genre = 'Funny';
    const tag_language = 'Java';

    // get id number   dashboard/edit/21     
    const id = window.location.toString().split('/') [
        window.location.toString().split('/').length -1
    ];

    if(title && post_body) {
        const response = await fetch(`/api/posts/${id}`, {
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