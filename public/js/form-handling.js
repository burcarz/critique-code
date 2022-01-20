async function createPostClick(event) {
    event.preventDefault();
    console.log('clicked')
    // declare form elements
    const detailsBtn = document.getElementById("details-btn");
	const bodyBtn = document.getElementById("body-btn");
	const firstForm = document.getElementById("form1");
	const secondForm = document.getElementById("form2");
	const postContainer = document.querySelector(".postContainer");
    const langSel = document.getElementById("selectLang");
    const genSel = document.getElementById("selectGen");
    const langOpt = document.getElementById("lang-options");
    const genOpt = document.getElementById("gen-options");
    const postSubmit = document.getElementById("post-submit");
    // display and hide modal
    let createModal = document.getElementById('create-post-modal');
    createModal.style.display = "block";

    document.getElementsByClassName('close')[0].addEventListener('click', function() {
        createModal.style.display = "none"
    });
    document.getElementById('close-post').addEventListener('click', function() {
        createModal.style.display = "none";
    });
    window.onclick = function(event) {
        let createModal = document.getElementById('create-post-modal');
        if (event.target == createModal) {
            createModal.style.display = "none"
        }
    }
    // control modal animations
    detailsBtn.addEventListener("click", () => {
		console.log('clicked')
		postContainer.classList.remove("right-panel-active");
	});

	bodyBtn.addEventListener("click", () => {
		console.log('clicked')
		postContainer.classList.add("right-panel-active");
	});
    langOpt.addEventListener('click', (e) => {
        let postLang = e.target.textContent;
        langSel.textContent = postLang;
    })
    genOpt.addEventListener('click', (e) => {
        let genLang = e.target.textContent;
        genSel.textContent = genLang;
    })
    console.log('clicked!');
    postSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        let genLang = genSel.textContent;
        let postLang = langSel.textContent;
        createPostHandler(genLang, postLang)
    });
};

async function createPostHandler(genre, lang) {
    const title = document.querySelector('input[name="post-title"').value;
    const post_body = document.querySelector('textarea[name="post-body"]').value;

    const tag_genre = genre;
    const tag_language = lang;
    if(title && post_body) {

        const response = await fetch('../api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                post_body,
                tag_genre,
                tag_language               
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


document.querySelector('#create-post-btn').addEventListener('click', createPostClick);