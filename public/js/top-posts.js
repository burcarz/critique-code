// retrieves top post information

async function getTopAdvice() {
    postBody = '';
    postTitle = '';
    const response = await fetch('/api/posts/adviceranked');
    const data = await response.json();
    console.log(data[0]);

    postBody += `<code>${data[0].post_body}</code>`;
    postTitle += `<h3>${data[0].title}</h3>`;

    displayAdvice(postBody, postTitle);
    
}

async function getTopFunny() {
    postBody = '';
    postTitle = '';
    const response = await fetch('/api/posts/funnyranked');
    const data = await response.json();
    console.log(data[0]);

    postBody += `<code>${data[0].post_body}</code>`;
    postTitle += `<h3>${data[0].title}</h3>`;

    displayAdvice(postBody, postTitle);
    
}

async function displayAdvice(postBody, postTitle) {
    let adviceBody = document.querySelector('#top-advice');
    let adviceTitle = document.querySelector('#advice-title');
    
    adviceTitle.innerHTML = `${postTitle}`;
    // adviceBody.innerHTML = `${postBody}`;
}

async function displayFunny(postBody, postTitle) {
    let funnyTitle = document.querySelector('#funny-title');
    let funnyBody = document.querySelector('funny-post-body');

    funnyTitle.innerHTML = `${postTitle}`;
    // funnyBody.innerHTML = `${postBody}`;
}

getTopFunny();
getTopAdvice();