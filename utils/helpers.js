
module.exports = {
    // a filter function that returns posts above vote threshold
    sortPosts: posts => {
        return posts.filter(post => post.vote_count >= 3);
    },
    getMostVoted: posts => {
        return posts.filter(post => Math.max(post.vote_count));
    },
    getAdvicePosts: posts => {
        return posts.filter(post => post.tag === "advice");
    },
    getFunnyPosts: posts => {
        return posts.filter(post => post.tag === "funny")
    },
    format_date: date => {
        if (typeof date !== 'object') {
            date = new Date(date);
          }
        
          var seconds = Math.floor((new Date() - date) / 1000);
          var intervalType;
        
          var interval = Math.floor(seconds / 31536000);
          if (interval >= 1) {
            intervalType = 'year';
          } else {
            interval = Math.floor(seconds / 2592000);
            if (interval >= 1) {
              intervalType = 'month';
            } else {
              interval = Math.floor(seconds / 86400);
              if (interval >= 1) {
                intervalType = 'day';
              } else {
                interval = Math.floor(seconds / 3600);
                if (interval >= 1) {
                  intervalType = "hour";
                } else {
                  interval = Math.floor(seconds / 60);
                  if (interval >= 1) {
                    intervalType = "minute";
                  } else {
                    interval = seconds;
                    intervalType = "second";
                  }
                }
              }
            }
          }
        
          if (interval > 1 || interval === 0) {
            intervalType += 's';
          }
        
          return interval + ' ' + intervalType;
    },
    format_plural: (word, amount) => {
        if (amount !== 1) {
          return `${word}s`;
        }
        return word;
    },
    get_comments: (posts) => {
      let totalComments = 0;
      for (i = 0; i < posts.length; i++) {
        let commentAmt = posts[i].comments.length;
        totalComments += commentAmt;
      }
      return totalComments;
    },
    concat_url: (github) => {
      let url = 'https://github-readme-stats.vercel.app/api/top-langs/?username='
      let strName = `${github}`;
      console.log(url.concat(strName));
      let newstr = url.concat(strName)
      return newstr;
    }
}

// module.exports = Handlebars.registerHelper('getMostVoted', (posts, opt) => {
//     let results = '';
//     posts.filter(post => {
//         results += opt.fn(post)
//     });
//     return results;
// })