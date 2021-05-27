const Score = document.querySelector('#main');
const info = document.querySelector('.right');
// let score_tag = '<h2>Hey User, You have guessed </h1>'
//                 + '<h1>' + localStorage.getItem('totalScore') + '/195</h1>'
//                 + '<h2>Countries correctly.....Keep it up!</h2>';
// Score.innerHTML = score_tag;
// console.log(localStorage.getItem('totalScore'));

//check for Navigation Timing API support

if (window.performance) {
    console.info("window.performance works fine on this browser");
  }
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    console.info( "This page is reloaded" );
    let score_tag = '<h2>' + 0 + '/ ' + localStorage.getItem('countries') + '</h2>'
    + '<h3>countries of ' + localStorage.getItem('continent') +' correctly</h3>'
    + '<h5>Keep it up!</h5>';
    Score.innerHTML = score_tag;
    console.log(localStorage.getItem('totalScore'));
    let info_tag = '<h1>Your Analysis</h1>'
                + '<h3>Continent: </h3>'
                + '<p><i class="fa fa-globe" aria-hidden="true"></i> ' + localStorage.getItem('continent') + '</p>'
                + '<h3>Countries visited: </h3>'
                + '<p><i class="fa fa-flag" aria-hidden="true"></i> 0</p>'
                + '<h3>Guessed correctly: </h3>'
                + '<p><i class="fa fa-check" aria-hidden="true"></i> ' + 0 + ' countries</p>';
    info.innerHTML = info_tag;
  } else {
    let score_tag ='<h2>' + localStorage.getItem('totalScore') + '/ ' + localStorage.getItem('countries') + '</h2>'
    + '<h3>countries of ' + localStorage.getItem('continent') +' correctly</h3>'
    + '<h5>Keep it up!</h5>';
    Score.innerHTML = score_tag;
    console.log(localStorage.getItem('totalScore'));
    let info_tag = '<h1>Your Analysis</h1>'
                + '<h3>Continent: </h3>'
                + '<p><i class="fa fa-globe" aria-hidden="true"></i> ' + localStorage.getItem('continent') + '</p>'
                + '<h3>Countries visited: </h3>'
                + '<p><i class="fa fa-flag" aria-hidden="true"></i> ' + localStorage.getItem('totalQuestions') + '</p>'
                + '<h3>Guessed correctly: </h3>'
                + '<p><i class="fa fa-check" aria-hidden="true"></i> ' + localStorage.getItem('totalScore') + ' countries</p>';
    info.innerHTML = info_tag;
  }


