const voteClickHandler = async function(id) {
    console.log(id)
    const response = await fetch(`/api/posts/vote/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok) {
        console.log('success');
    } else {
        console.log('vote failed to seed')
    }
    let voteText = document.querySelector(`#vote-val${id}`);
    let intVote = parseInt(voteText.innerHTML);
    intVote++;
    console.log(intVote);
    voteText.innerHTML = intVote.toString();
}

let getVoteId = function() {
    document.querySelector('.posts-timeline').addEventListener('click', (e) => {
        let postId = e.target.id;
        voteClickHandler(postId);
    })
}

getVoteId();