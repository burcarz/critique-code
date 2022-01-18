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