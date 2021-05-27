const next_btn = document.querySelector('.next');
const check_btn = document.querySelector('.check');
// const end_btn = document.querySelector('.end');
let que_count = 1;
let score = 0;
let checkFlag = 0;
let dumb_score;
const count_que = document.querySelector('.count_que');
const comment = document.querySelector('#comment');
const score_display = document.querySelector('.Score');
const que_text = document.querySelector('.question');
const score__dis = que_text.querySelector('#score_Dislay');
let nextCount = 0;
next_btn.onclick = () =>{
    showQuestion(que_count++);
    noChange();
}
let ans;
let countQ = 0;
check_btn.onclick = () => {
    checkFlag++;
    showAnswer(countQ, checkFlag);
    showData(countQ);
    //change();

}

// end_btn.onclick = () =>{
//     endQuiz();
// }
const right = document.querySelector('.right');
const left = document.querySelector('.left');

function change(){
    next_btn.style.visibility = "visible";
    right.style.visibility = 'visible';
    left.style.transform = 'translateX(-60%)';
    left.style.width = '40%';
    left.style.transition = 'transform width 500ms ease-out';
}
function noChange(){
    right.style.visibility = 'hidden';
    left.style.transform = 'translateX(0)';
    left.style.width = '50%';
    left.style.transition = 'transform width 0ms linear';
}
// const country_cap = document.querySelector('.country_cap');
// const more_inf = document.querySelector('.more_inf');

function showQuestion(index){
    const options_list = document.querySelector('.options_list');
    // let que_tag = '<span><h5 id="score_Display">Score: ' + score + '</h5></span>' + '<span><h4>' + questions[index].numb + '.&nbsp;' + questions[index].question + '</h4><br/></span>';
    let que_tag = '<div class="col-lg-9"><h4>' + questions[index].numb + '.&nbsp;'+  questions[index].question+ '</h4></div><div class="col-lg-3">'
                + '<span><h4 id="score_Display">Score: '
                + score + '</h4></span></div> ';
    que_text.innerHTML = que_tag;
    nextCount++;
    // let option_tag = '<div class="option">'
    //                 + '<input type="radio" id="' + questions[index].options[0] + '"name="list" value="' + questions[index].options[0] +'">'
    //                 + '<span><label>&nbsp;' + questions[index].options[0] + '</label></span></div>'
    //                 + '<div class="option">'
    //                 + '<input type="radio" id="' + questions[index].options[1] + '"name="list" value="' + questions[index].options[1] +'">'
    //                 + '<span><label>&nbsp;' + questions[index].options[1] + '</label></span></div>'
    //                 + '<div class="option">'
    //                 + '<input type="radio" id="' + questions[index].options[2] + '"name="list" value="' + questions[index].options[2] +'">'
    //                 + '<span><label>&nbsp;' + questions[index].options[2] + '</label></span></div>'
    //                 + '<div class="option">'
    //                 + '<input type="radio" id="' + questions[index].options[3] + '"name="list" value="' + questions[index].options[3] +'">'
    //                 + '<span><label>&nbsp;' + questions[index].options[3] + '</label></span></div>'
    let option_tag = '<div class="option">'
                        + '<label for="' + questions[index].options[0] + '" class="radio">'
                        +  '<input type="radio" name="list" id="' + questions[index].options[0] + '" class="radio__input" value="' + questions[index].options[0] + '">'
                        + '<div class="radio__radio"></div>'
                            + questions[index].options[0]
                            + '</label>'
                        + '</div>'
                        + '<div class="option">'
                            + '<label for="' + questions[index].options[1] + '" class="radio">'
                                + '<input type="radio" name="list" id="' + questions[index].options[1] + '" class="radio__input" value="' + questions[index].options[1] + '">'
                                + '<div class="radio__radio"></div>'
                                + questions[index].options[1]
                            + '</label>'
                        + '</div>'
                        + '<div class="option">'
                           + ' <label for="' + questions[index].options[2] + '" class="radio">'
                             +    '<input type="radio" name="list" id="' + questions[index].options[2] + '" class="radio__input" value="' + questions[index].options[2] + '">'
                               +  '<div class="radio__radio"></div>'
                                + questions[index].options[2]
                            + '</label>'
                        + '</div>'
                        + '<div class="option">'
                          +   '<label for="' + questions[index].options[3] + '" class="radio">'
                            +     '<input type="radio" name="list" id="' + questions[index].options[3] + '" class="radio__input" value="' + questions[index].options[3] + '">'
                              +   '<div class="radio__radio"></div>'
                               +  questions[index].options[3]
                            + '</label>'
                        + '</div>';
    options_list.innerHTML = option_tag;
    let count_tag = '<p><span>' + que_count +'</span> out of <span><strong>' +questions.length +'</strong></span> countries</p>';
    count_que.innerHTML = count_tag;
    const option = options_list.querySelector('.option');
    const comment = document.querySelector('#comment');
    let comment_tag = null;
    comment.innerHTML = comment_tag;
    countQ = index;
    right.style.visibility = "hidden";
    next_btn.style.visibility = "hidden";
    checkFlag = 0;
    left.style.transition = 'transform width 0ms linear';
    if(typeof(Storage) !== 'undefined'){
        localStorage.setItem('totalQuestions', nextCount+1);
    }
}

let continent = "";
let countryCount = 0;
if((window.location.pathname).includes('asia.php')){
    continent = "Asia";
    countryCount = 47;
}
if((window.location.pathname).includes('oceania.php')){
    continent = "Oceania";
    countryCount = 15;
}
if((window.location.pathname).includes('europe.php')){
    continent = "Europe";
    countryCount = 44;
}
if((window.location.pathname).includes('northAmerica.php')){
    continent = "North America";
    countryCount = 23;
}
if((window.location.pathname).includes('southAmerica.php')){
    continent = "South America";
    countryCount = 12;
}
if((window.location.pathname).includes('africa.php')){
    continent = "Africa";
    countryCount = 54;
}
if(typeof(Storage) !== 'undefined'){
    localStorage.setItem('continent', continent);
    localStorage.setItem('countries', countryCount);
}
function showAnswer(index, cF){
    // const comment = document.querySelector('#comment')
        for(let i = 0; i < 4; i++){
            console.log(index);

            if(document.getElementById(questions[index].options[i]).checked){
                ans = document.getElementById(questions[index].options[i]).value;
                if(ans == questions[index].answer){
                    change();
                    change();
                    if(cF == 1){
                        score++;
                        dumb_score = score;
                        console.log('my score: ' + score);
                        let score_add_tag = '<div class="col-lg-9"><h5>' + questions[index].numb + '.&nbsp;'+  questions[index].question+ '</h5></div><div class="col-lg-3">'
                                            + '<span><h5 id="score_Display">Score: '
                                            + score + '</h5></span></div> ';
                        que_text.innerHTML = score_add_tag;
                        // change();
                        if(typeof(Storage) !== 'undefined'){
                            localStorage.setItem('totalScore', score);
                        }
                    }
                    comment.innerHTML = ans + '! Yes!! You are Correct '+'&nbsp;<i class="fa fa-smile-o" aria-hidden="true"></i>';
                    // document.getElementById('showInfo').style.display = "block";
                    break;
                }
                else{
                    comment.innerHTML = 'Oops! Wrong one....Try Again'+ '&nbsp;<i class="fa fa-frown-o" aria-hidden="true"></i>';
                }

            }
        }
}

if(performance.navigation.type == performance.navigation.TYPE_RELOAD){
    localStorage.setItem('totalScore', 0);
}
// if(typeof(Storage) !== 'undefined'){
//     localStorage.setItem('totalCountries', data.length);
// }
function showData(i){
    let country_cap_tag = '<div class="row">'
                            +    '<div class="col">'
                            +        '<h6>Country: &nbsp;' + data[i].country + '</h6>'
                            +        '<h6>Capital: &nbsp;' + data[i].capital + '</h6>'
                            +        '<h6>Currency: ' + data[i].currency + '</h6>'
                            +        '<h6>Offical Languages: &nbsp;' + data[i].language + '</h6>'
                            +     '</div>'
                        +        '<div class="col">'
                        +            '<img id="flag" src=' + data[i].flag + ' alt="Flag">'
                        +        '</div>'
                        +    '</div>'
                        + '</div>'
    + '<br/>'
                        + '<p>' + data[i].info[0] + '</p>'
                        +  '<p>' + data[i].info[1] + '</p>'
                        +  '<p>You can check here for extra information: <a href=' + data[i].link + ' target="_blank">' 
                        +   data[i].country + '</a></p>';
    right.innerHTML = country_cap_tag;  
    // next_btn.style.visibility = "visible"; 
}

// right.innerHTML = country_cap_tag;
    
//     let more_inf_tag = '

//uncomment later

// const inner_block = document.querySelector('#inner_block');
// const outer_block = document.querySelector('#outer_block');
// function endQuiz(){
//     inner_block.style.display = 'block';
//     outer_block.style.display = 'block';
// }
// const final_end = inner_block.querySelector('#final_end');
// const Continue = inner_block.querySelector('#Continue');
// const other_continents = inner_block.querySelector('#other_continents');

// final_end.onclick = () => {
//     end_quiz();
// }
// Continue.onclick = () => {
//     inner_block.style.display = 'none';
//     outer_block.style.display = 'none';
// }
// other_continents.onclick = () => {
//     window.location.href = 'Home.html';
// }
// function end_quiz(){
//     window.location.href = 'endPage.html';
// }

function end(){
    window.location.href = "end.php";
}

function home(){
    window.location.href = 'home.php';   
}
