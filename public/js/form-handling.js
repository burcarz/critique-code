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
        console.log(e.target.textContent);
        let postLang = e.target.textContent;
        langSel.textContent = postLang;
    })

    genOpt.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        let genLang = e.target.textContent;
        genSel.textContent = genLang;
    })


    // langSel.addEventListener('click', () => {
    //     langSel.textContent = java;
    //     console.log(langSel)
    // })

    console.log('clicked!');
    postSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        let genLang = genSel.textContent;
        let postLang = langSel.textContent;
        console.log(`${genLang} and ${postLang}`);
        createPostHandler(genLang, postLang)
    });
};

async function getButtonVal() {
    const langSel = document.getElementById("selectLang");
    // const js = document.getElementById("javascript");
    // const css = document.getElementById("CSS").textContent;
    // const java = document.getElementById("java").textContent;
    // const cPlus = document.getElementById("C++").textContent;
    // const cSharp = document.getElementById("cSharp").textContent;
    // const python = document.getElementById("Python").textContent;
    // const php = document.getElementById("PHP").textContent;
    // const adv = document.getElementById("advicebtn").textContent;
    // const fun = document.getElementById("funnybtn").textContent;
    const langOpt = document.getElementById("lang-options");
    const genOpt = document.getElementById("gen-options");

    langOpt.addEventListener('click', (e) => {
        postLang = e.target.textContent
    })
    genOpt.addEventListener('click', (e) => {
        genLang = e.target.textContent
    })
}

async function createPostHandler(genre, lang) {
    // event.preventDefault();
    // alert('In createPostHandler');

    const title = document.querySelector('input[name="post-title"').value;
    const post_body = document.querySelector('textarea[name="post-body"]').value;

    console.log(title);
    console.log(post_body);

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