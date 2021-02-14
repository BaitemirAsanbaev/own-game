let points = document.querySelector('.team-points');
let teams = document.querySelector('.all-teams');

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;
let num7 = 0;
let num8 = 0;
let num9 = 0;
let num10 = 0;
let num11 = 0;
let num12 = 0;
let num13 = 0;

teams.addEventListener('mousedown', function(event){
    if(event.target.getAttribute('id') == 'team1'){
        if(event.ctrlKey){
            num1 -=  100;
            event.target.innerText = num1;
        }
        else{
            num1 +=  100;
            event.target.innerText = num1;
        }
    }
    if(event.target.getAttribute('id') == 'team2'){
        if(event.ctrlKey){
            num2 -=  100;
            event.target.innerText = num2;
        }
        else{
            num2 = num2 + 100;
            event.target.innerText = num2;
        }
    }
    if(event.target.getAttribute('id') == 'team3'){
        if(event.ctrlKey){
            num3 -=  100;
            event.target.innerText = num3;
        }
        else{
            num3 +=  100;
            event.target.innerText = num3;
        }
    }
    if(event.target.getAttribute('id') == 'team4'){
        if(event.ctrlKey){
            num4 -=  100;
            event.target.innerText = num4;
        }
        else{
            num4 +=  100;
            event.target.innerText = num4;
        }
    }
    if(event.target.getAttribute('id') == 'team5'){
        if(event.ctrlKey){
            num5 -=  100;
            event.target.innerText = num5;
        }
        else{
            num5 +=  100;
            event.target.innerText = num5;
        }
    }
    if(event.target.getAttribute('id') == 'team6'){
        if(event.ctrlKey){
            num6 -=  100;
            event.target.innerText = num6;
        }
        else{
            num6 +=  100;
            event.target.innerText = num6;
        }
    }
    if(event.target.getAttribute('id') == 'team7'){
        if(event.ctrlKey){
            num7 -=  100;
            event.target.innerText = num7;
        }
        else{
            num7 +=  100;
            event.target.innerText = num7;
        }
    }
    if(event.target.getAttribute('id') == 'team8'){
        if(event.ctrlKey){
            num8 -=  100;
            event.target.innerText = num8;
        }
        else{
            num8 +=  100;
            event.target.innerText = num8;
        }
    }
    if(event.target.getAttribute('id') == 'team9'){
        if(event.ctrlKey){
            num9 -=  100;
            event.target.innerText = num9;
        }
        else{
            num9 +=  100;
            event.target.innerText = num9;
        }
    }
    if(event.target.getAttribute('id') == 'team10'){
        if(event.ctrlKey){
            num10 -=  100;
            event.target.innerText = num10;
        }
        else{
            num10 +=  100;
            event.target.innerText = num10;
        }
    }
    if(event.target.getAttribute('id') == 'team11'){
        if(event.ctrlKey){
            num11 -=  100;
            event.target.innerText = num11;
        }
        else{
            num11 +=  100;
            event.target.innerText = num11;
        }
    }
    if(event.target.getAttribute('id') == 'team12'){
        if(event.ctrlKey){
            num12 -=  100;
            event.target.innerText = num12;
        }
        else{
            num12 +=  100;
            event.target.innerText = num12;
        }
    }
    if(event.target.getAttribute('id') == 'team13'){
        if(event.ctrlKey){
            num13 -=  100;
            event.target.innerText = num13;
        }
        else{
            num13 +=  100;
            event.target.innerText = num13;
        }
    
    }

})

let questions = document.querySelector('.questions');
let card = document.querySelector('.card');
let question = document.querySelector('.question');
let answer = document.querySelector('.answer');
let showAnswer = document.querySelector('.answer-btn');
let hideAnswer = document.querySelector('.clear-btn');

function questionWrite(qid, aid){
    question.innerText = qid;
    showAnswer.addEventListener('click', function(){
        answer.innerText = aid;
    })
    hideAnswer.addEventListener('click', function(){
        answer.innerText = '';
        question.innerText = '';
    })
}

questions.addEventListener('mousedown', function(event){
    if(event.target.tagName == 'DIV'){
        if(event.target.getAttribute('id') == 'n1q1'){
            questionWrite("", "");
        }
        if(event.target.getAttribute('id') == 'n1q2'){
            questionWrite("", "");
        }
        if(event.target.getAttribute('id') == 'n1q3'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n1q4'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n1q5'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n2q1'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n2q2'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n2q3'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n2q4'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n2q5'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n3q1'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n3q2'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n3q3'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n3q4'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n3q5'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n4q1'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n4q2'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n4q3'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n4q4'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n4q5'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n5q1'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n5q2'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n5q3'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n5q4'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n5q5'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n6q1'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n6q2'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n6q3'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n6q4'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n6q5'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n7q1'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n7q2'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n7q3'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n7q4'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n7q5'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n8q1'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n8q2'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n8q3'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n8q4'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n8q5'){
            questionWrite("");
        }
        
    }

})