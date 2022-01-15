// retrieves top post information

async function getTopPosts() {
    let adviceBody = document.querySelector('advice-post-body');
    let funnyBody = document.querySelector('funny-post-body');
    let adviceTitle = document.querySelector('#advice-title');
    let funnyTitle = document.querySelector('#funny-title');

    const response = await fetch('/api/posts/adviceranked', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log(response);
}