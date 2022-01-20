
async function editPostHandler(e) {
    e.preventDefault();
    console.log('clicked edit!')
    const container = document.querySelector(".container");
    let avOpt = document.querySelector("#avatar-options");
    const saveChanges = document.getElementById('save-changes-btn');
    let editModal = document.getElementById('edit-modal');

    const avSel = document.getElementById("selectAv");
    editModal.style.display = "block";

    avOpt.addEventListener('click', (e) => {
        let profAv = e.target.id;
        avSel.src = `/assets/${profAv}`;
        console.log(profAv);
        console.log(avSel);
        avOpt = profAv;
        console.log(avOpt);

    })

    window.onclick = function(event) {
        let editModal = document.getElementById('edit-modal');
        if (event.target == editModal) {
            editModal.style.display = "none"
        }
    }

    const id = document.querySelector('.inner-side').id;
    console.log(id);


    saveChanges.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(avOpt)
        sendProfileInfo(avOpt, id);
    })
    // control modal animations
}

async function sendProfileInfo(avatarImg, id) {
    const title = document.querySelector('input[name="user-title"]').value;
    let bio = document.querySelector('textarea[name="user-bio"]').value;
    const username = document.querySelector('input[name="username"]').value;
    const github = document.querySelector('input[name="user-github"]').value;
    const avatar = `${avatarImg}`;

    if (!bio) {
        bio = document.getElementById('bio-text').innerHTML;
    }
        const response = await fetch(`../api/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                username,
                title,
                bio,
                github,
                avatar              
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

document.querySelector('#edit-profile-btn').addEventListener('click', editPostHandler);