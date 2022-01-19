

const voteClickHandler = async function(id) {
    console.log(id)
    // console.log(postId);
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
    // console.log(postResponse.json());
}

let getVoteId = function() {
    document.querySelector('.posts-timeline').addEventListener('click', (e) => {
        console.log(e.target);
        let postId = e.target.id;
        let postIdArr = postId.split('-');
        voteClickHandler(postIdArr[1]);
    })
}

getVoteId();
