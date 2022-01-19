// retrieves post via tag_language


// temp for MVP 
async function getPostByLanguage(language) { 



//    if(window.location.href.indexOf('tag') > -1) {
//        const url = window.location.href;
//        const urlArr = url.split('/');
//        console.log(urlArr);
//        urlArr.pop();
//        urlArr.push(language);
//        const newUrl = urlArr.join('/')
//     const newUrl = ('http://' +  window.location.host + '/tag/'+  language);
    

      
//        window.location = newUrl;
//    } else {
//        const url = window.location.href;
//        const newUrl = url + 'tag/' + language;

//     const newUrl = ('http://' + window.location.host +'/tag/'+ language);
   

      

//        window.location = newUrl;
//    }

    const newUrl = ('http://' + window.location.host +'/tag/'+ language);
    window.location = newUrl;
}

document.querySelector('.search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchText = document.querySelector('input[name="search"]').value;
    console.log(searchText);
    getPostByLanguage(searchText);
});

let input = document.getElementById('language-search');

function enter() {
    input.setAttribute('placeholder', "Don't Type French or Something Like that");
}

function exit() {
    input.setAttribute('placeholder', 'because that would send a 500 error lmao');
    setTimeout(wait, 3000);
}

function wait() {
    input.setAttribute('placeholder', 'Now, what PROGRAMMING LANGUAGE are you looking for?');
}

input.addEventListener("mouseover", enter);
input.addEventListener("mouseout", exit);