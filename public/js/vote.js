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
}

let getVoteId = function() {
    let elements = document.getElementsByClassName('up-vote-icon');
    for (i = 0; i < elements.length; i++) {
        // console.log(elements[i].id);
        let postId = elements[i].id
        // id.push(elements[i].id);
        document.getElementById(`${postId}`).addEventListener('click', (e) => {
            voteClickHandler(postId);
        })
    }
}

getVoteId();