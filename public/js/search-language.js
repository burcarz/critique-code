// retrieves post via tag_language

async function getPostByLanguage(language) {
    const response = await fetch('api/posts/tag/' + language, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(response.json);

    if(response.ok) {
        console.log('success');
        console.log(response.json);
    } else {
        console.log('Failed to find tag with that language');
    }
}