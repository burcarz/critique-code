// retrieves post via tag_language

async function getPostByLanguage(language) { // change this function tomorrow to work with the url's that Zach made in homeroutes
   if(window.location.href.indexOf('tag') > -1) {
       const url = window.location.href;
       const urlArr = url.split('/');
       urlArr.pop();
       urlArr.push(language);
       const newUrl = urlArr.join('/')

       console.log(newUrl);
       window.location = newUrl;
   } else {
       const url = window.location.href;
       const newUrl = url + 'tag/' + language;

       window.location = newUrl;
   }
}

document.querySelector('.search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchText = document.querySelector('input[name="search"]').value;
    getPostByLanguage(searchText);
});