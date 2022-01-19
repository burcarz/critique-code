upvotedPosts = [];
downvotedPosts = [];
const upvoteClickHandler = async function(id) {
    let isMatch  = false;
    for (i = 0; i < upvotedPosts.length; i++) {
        console.log('looking')
        if (upvotedPosts[i] === id) {
            console.log('match found!')
            isMatch = true;
        }
    }
    if (!isMatch) {
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
        let upvoteIcon = document.getElementById(`upvote-${id}`);
        upvoteIcon.classList.add("hidden");
        let downvoteIcon = document.getElementById(`downvote-${id}`);
        downvoteIcon.classList.remove("hidden");
        upvotedPosts.push(id);
        localStorage.setItem(`upvotedPosts`, JSON.stringify(upvotedPosts));
    } else {
        return;
    }
}

const downvoteClickHandler = async function(id) {
    let isMatch = false;
    for (i = 0; i < downvotedPosts.length; i++) {
        console.log('looking')
        if (downvotedPosts[i] === id) {
            console.log('match found!')
            isMatch = true;
        }
    }
    if (!isMatch) {
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
        let downvoteIcon = document.getElementById(`downvote-${id}`);
        downvoteIcon.classList.add("hidden");
        let upvoteIcon = document.getElementById(`upvote-${id}`);
        upvoteIcon.classList.remove("hidden");
        downvotedPosts.push(id);
        localStorage.setItem(`downvotedPosts`, JSON.stringify(downvotedPosts));
    } else {
        return;
    }
<<<<<<< HEAD
    
    let voteText = document.querySelector(`#vote-val${id}`);
    let intVote = parseInt(voteText.innerHTML);
    intVote++;
    console.log(intVote);
    voteText.innerHTML = intVote.toString();
=======
>>>>>>> develop
}

let getVoteId = function() {
    document.querySelector('.posts-timeline').addEventListener('click', (e) => {
        let postId = e.target.id;
        let postIdArr = postId.split('-');
<<<<<<< HEAD
        voteClickHandler(postIdArr[1]);
    });
=======
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
>>>>>>> develop
}

let retrievePostIds = function() {
    let savedUpvotes = localStorage.getItem("upvotedPosts");
    if (!upvotedPosts) {
        console.log("no posts")
        return false;
    }
    let savedDownvotes = localStorage.getItem('downvotedPosts');
    if (!downvotedPosts) {
        console.log('no posts')
        return false;
    }
    console.log(savedDownvotes);
    console.log(savedUpvotes);

    upvotedPosts = JSON.parse(savedUpvotes);
    downvotedPosts = JSON.parse(savedDownvotes);

    for (i = 0; i < upvotedPosts.length; i++) {
        let id = upvotedPosts[i];
        let upvoteIcon = document.getElementById(`upvote-${id}`);
        upvoteIcon.classList.add("hidden");
    }

    for (i = 0; i < downvotedPosts.length; i++) {
        let id = downvotedPosts[i];
        let downvoteIcon = document.getElementById(`downvote-${id}`);
        downvoteIcon.classList.add("hidden");
    }
}

retrievePostIds();
getVoteId();


