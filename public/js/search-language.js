// retrieves post via tag_language

async function getPostByLanguage(language) {
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

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchText = document.querySelector('input[name="search"]').value;
    window.alert(searchText);
    getPostByLanguage(searchText);
});