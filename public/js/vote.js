const voteClickHandler = async function(event) {
    event.preventDefault();
    const postEl = event.target;
    //const postId = postEl.querySelector('.info').querySelector('.id-val');

    // console.log(postId);
   /* const response = await fetch(`/api/posts/vote/${postId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    });*/

    /*if(response.ok) {
        console.log('success');
        console.log(event.target);
    } else {
        console.log('vote failed to seed')
    }*/
    console.log(postEl);
}

document.querySelector('.up-vote-icon').addEventListener('click', voteClickHandler);
