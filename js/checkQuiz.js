function check(){
    var ans;
    if(document.getElementById('India').checked){
        ans = document.getElementById('India').value;
        document.getElementById('comment').innerHTML = ans + '! Yes!! You are Correct '+'&nbsp;<i class="fa fa-smile-o" aria-hidden="true"></i>';
        
    }else{
        document.getElementById('comment').innerHTML = 'Oops! Wrong one....Try Again'+ '&nbsp;<i class="fa fa-frown-o" aria-hidden="true"></i>';
    }
}
const right = document.querySelector('#right');
const left = document.querySelector('.left');
function change(){
    right.style.visibility = 'visible';
    left.style.transform = 'translateX(-60%)';
    left.style.width = '40%';
}