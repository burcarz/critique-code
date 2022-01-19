let id = [];

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
    // fetch(`/api/posts/${id}`)
    // .then(postResponse => postResponse.json())
    // .then(data => {
    //     console.log(data);
    //     let voteText = document.querySelector(`#vote-val${id}`);
    //     voteText.innerHTML = data.vote_count;
    // });
    let voteText = document.querySelector(`#vote-val${id}`);
    let intVote = parseInt(voteText.innerHTML);
    intVote++;
    console.log(intVote);
    voteText.innerHTML = intVote.toString();
    // console.log(postResponse.json());
}

let getVoteId = function() {
    // let elements = document.getElementsByClassName('up-vote-icon');
    document.querySelector('.posts-timeline').addEventListener('click', (e) => {
        console.log(e.target);
        let postId = e.target.id;
        voteClickHandler(postId);
    })
    // for (i = 0; i < elements.length; i++) {
    //     // console.log(elements[i].id);
    //     let postId = elements[i].id
    //     // id.push(elements[i].id);
    //     document.getElementById(`${postId}`).addEventListener('click', (e) => {
    //         voteClickHandler(postId);
            
    //     })
    // }
}

getVoteId();