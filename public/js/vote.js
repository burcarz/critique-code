const upvoteClickHandler = async function(id) {
    console.log(id)
    const response = await fetch(`/api/posts/upvote/${id}`, {
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

const downvoteClickHandler = async function(id) {
    console.log(id)
    const response = await fetch(`/api/posts/downvote/${id}`, {
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
    intVote--;
    console.log(intVote);
    voteText.innerHTML = intVote.toString();
}


let getVoteId = function() {
    document.querySelector('.posts-timeline').addEventListener('click', (e) => {
        let postId = e.target.id;
        let postIdArr = postId.split('-');
        console.log(postIdArr[1]);
        let postIdVal = postIdArr[1];
        let postIdStr = postIdArr[0];
        if (postIdStr === "upvote") {
            upvoteClickHandler(postIdVal);
        }
        else if (postIdStr === "downvote") {
            downvoteClickHandler(postIdVal);
        }
    })
}

getVoteId();
