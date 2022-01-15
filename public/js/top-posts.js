// retrieves top post information

window.onload = function() {
    let adviceBody = document.querySelector('advice-post-body');
    let funnyBody = document.querySelector('funny-post-body');
    let adviceTitle = document.querySelector('#advice-title');
    let funnyTitle = document.querySelector('#funny-title');

    fetch('/api/posts/adviceranked', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        console.log(response.json())
    })
}