// retrieves post via tag_language

async function getPostByLanguage(language) { // change this function tomorrow to work with the url's that Zach made in homeroutes
    const response = await fetch('api/posts/tag/' + language, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });


    if(response.ok) {
        console.log('success');
        console.log(response.json());
    } else {
        console.log('Failed to find tag with that language');
    }
}

document.querySelector('.search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchText = document.querySelector('input[name="search"]').value;
    getPostByLanguage(searchText);
});