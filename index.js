let points = document.querySelector('.team-points');
let teams = document.querySelector('.all-teams');

let num = 0;
teams.addEventListener('mousedown', function(event){
    if(event.target.tagName == 'SPAN'){
        if(event.ctrlKey){
            num -=  100;
            event.target.innerText = num;
        }
        else{
            num +=  100;
            event.target.innerText = num;
        }
    }

})

let questions = document.querySelector('.questions');
let card = document.querySelector('.card');
let question = document.querySelector('.question');
let answer = document.querySelector('.answer');

function questionWrite(qid, aid){
    question.innerText = qid;
    answer.innerText = aid;
}

questions.addEventListener('mousedown', function(event){
    if(event.target.tagName == 'DIV'){
        if(event.target.getAttribute('id') == 'n1q1'){
            questionWrite("");
        }
        if(event.target.getAttribute('id') == 'n1q2'){
            questionWrite("");
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