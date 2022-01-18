
async function createPostClick(event) {
    event.preventDefault();
    console.log('clicked')
    const detailsBtn = document.getElementById("details-btn");
	const bodyBtn = document.getElementById("body-btn");
	const firstForm = document.getElementById("form1");
	const secondForm = document.getElementById("form2");
	const postContainer = document.querySelector(".postContainer");
    const langSel = document.getElementById("language-select");
    const js = document.querySelector("#javascript");

    let modal = document.getElementById('create-post-modal');
    modal.style.display = "block";

    document.getElementsByClassName('close')[0].addEventListener('click', function() {
        modal.style.display = "none"
    });

    window.onclick = function(event) {
        let modal = document.getElementById('create-post-modal');
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }
    detailsBtn.addEventListener("click", () => {
		console.log('clicked')
		postContainer.classList.remove("right-panel-active");
	});

	bodyBtn.addEventListener("click", () => {
		console.log('clicked')
		postContainer.classList.add("right-panel-active");
	});

    firstForm.addEventListener("submit", (e) => e.preventDefault());
	secondForm.addEventListener("submit", (e) => e.preventDefault());
    console.log('clicked!');
    document.querySelector('#post-submit').addEventListener('submit', createPostHandler);
};

async function createPostHandler(event) {
    event.preventDefault();
    alert('In createPostHandler');

    const title = document.querySelector('input[name="post-title"').value;
    const post_body = document.querySelector('textarea[name="post-body"]').value;

    alert( title);
    alert(post_body);

    const tag_genre = 'Funny';
    const tag_language = 'Java';

    if(title && post_body) {

        const response = await fetch('../api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                post_body,
                tag_genre,
                tag_language,
               
                

                //TODO: login needs to work 
                //user_id: 1
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('success');
            document.location.replace('/profile');
        } else {
            console.log('failed to create post');
        }
    }
    
}

window.onload = function() {
    document.querySelector('#post-btn').addEventListener('click', createPostClick);
}