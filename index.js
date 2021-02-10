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