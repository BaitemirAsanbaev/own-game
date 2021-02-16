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
        if(event.which == 3){
            num1 -=  100;
            event.target.innerText = num1;
        }
        else{
            num1 +=  100;
            event.target.innerText = num1;
        }
    }
    if(event.target.getAttribute('id') == 'team2'){
        if(event.which == 3){
            num2 -=  100;
            event.target.innerText = num2;
        }
        else{
            num2 = num2 + 100;
            event.target.innerText = num2;
        }
    }
    if(event.target.getAttribute('id') == 'team3'){
        if(event.which == 3){
            num3 -=  100;
            event.target.innerText = num3;
        }
        else{
            num3 +=  100;
            event.target.innerText = num3;
        }
    }
    if(event.target.getAttribute('id') == 'team4'){
        if(event.which == 3){
            num4 -=  100;
            event.target.innerText = num4;
        }
        else{
            num4 +=  100;
            event.target.innerText = num4;
        }
    }
    if(event.target.getAttribute('id') == 'team5'){
        if(event.which == 3){
            num5 -=  100;
            event.target.innerText = num5;
        }
        else{
            num5 +=  100;
            event.target.innerText = num5;
        }
    }
    if(event.target.getAttribute('id') == 'team6'){
        if(event.which == 3){
            num6 -=  100;
            event.target.innerText = num6;
        }
        else{
            num6 +=  100;
            event.target.innerText = num6;
        }
    }
    if(event.target.getAttribute('id') == 'team7'){
        if(event.which == 3){
            num7 -=  100;
            event.target.innerText = num7;
        }
        else{
            num7 +=  100;
            event.target.innerText = num7;
        }
    }
    if(event.target.getAttribute('id') == 'team8'){
        if(event.which == 3){
            num8 -=  100;
            event.target.innerText = num8;
        }
        else{
            num8 +=  100;
            event.target.innerText = num8;
        }
    }
    if(event.target.getAttribute('id') == 'team9'){
        if(event.which == 3){
            num9 -=  100;
            event.target.innerText = num9;
        }
        else{
            num9 +=  100;
            event.target.innerText = num9;
        }
    }
    if(event.target.getAttribute('id') == 'team10'){
        if(event.which == 3){
            num10 -=  100;
            event.target.innerText = num10;
        }
        else{
            num10 +=  100;
            event.target.innerText = num10;
        }
    }
    if(event.target.getAttribute('id') == 'team11'){
        if(event.which == 3){
            num11 -=  100;
            event.target.innerText = num11;
        }
        else{
            num11 +=  100;
            event.target.innerText = num11;
        }
    }
    if(event.target.getAttribute('id') == 'team12'){
        if(event.which == 3){
            num12 -=  100;
            event.target.innerText = num12;
        }
        else{
            num12 +=  100;
            event.target.innerText = num12;
        }
    }
    if(event.target.getAttribute('id') == 'team13'){
        if(event.which == 3){
            num13 -=  100;
            event.target.innerText = num13;
        }
        else{
            num13 +=  100;
            event.target.innerText = num13;
        }
    
    }

})
document.oncontextmenu = function (){return false};
let questions = document.querySelector('.questions');
let card = document.querySelector('.card');
let question = document.querySelector('.question');
let answer = document.querySelector('.answer');
let showAnswer = document.querySelector('.answer-btn');
let hideAnswer = document.querySelector('.clear-btn');

function questionWrite(qid, aid){
    question.innerHTML = qid;
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
            questionWrite("Сумма всех сторон прямоугольника", "Периметр");
        }
        if(event.target.getAttribute('id') == 'n1q2'){
            questionWrite("Числа расположенные правее нуля", "Положительные");
        }
        if(event.target.getAttribute('id') == 'n1q3'){
            questionWrite("Сколько цифр вы знаете", "10 цифр");
        }
        if(event.target.getAttribute('id') == 'n1q4'){
            questionWrite("Прибор для измерения углов", "Транспортир");
        }
        if(event.target.getAttribute('id') == 'n1q5'){
            questionWrite("15/2 : 20/2", "3/4");
        }
        if(event.target.getAttribute('id') == 'n2q1'){
            questionWrite("В каком году был создан АК-74", "В 1974 году");
        }
        if(event.target.getAttribute('id') == 'n2q2'){
            questionWrite("Главнокомандующий вооруженными силами КР", "Президент");
        }
        if(event.target.getAttribute('id') == 'n2q3'){
            questionWrite("Начало и конец Первой Мировой Войоны", "1914 - 1918");
        }
        if(event.target.getAttribute('id') == 'n2q4'){
            questionWrite("Высшее звание в армии", "Генерал");
        }
        if(event.target.getAttribute('id') == 'n2q5'){
            questionWrite("Как прозвали в народе  гвардейский миномёт 'БМ-13 в годы Великой Отечественной Войны'", "Катюша");
        }
        if(event.target.getAttribute('id') == 'n3q1'){
            questionWrite("Кета + Рак");
        }
        if(event.target.getAttribute('id') == 'n3q2'){
            questionWrite("Меч + Пион");
        }
        if(event.target.getAttribute('id') == 'n3q3'){
            questionWrite("Тина + Рак");
        }
        if(event.target.getAttribute('id') == 'n3q4'){
            questionWrite("Ель + Кит");
        }
        if(event.target.getAttribute('id') == 'n3q5'){
            questionWrite("Усы + Пар");
        }
        if(event.target.getAttribute('id') == 'n4q1'){
            questionWrite("Кто должен уступить, входящий или выходящий", "Входящий");
        }
        if(event.target.getAttribute('id') == 'n4q2'){
            questionWrite("Кто должен первым здороваться, младший или старший", "Младший");
        }
        if(event.target.getAttribute('id') == 'n4q3'){
            questionWrite("Кто должен подавать руку для рукопожатия ", "Старший");
        }
        if(event.target.getAttribute('id') == 'n4q4'){
            questionWrite("Почему, когда девушка идёт вниз по лестницеб мужчина должен стоять на 2-3 ступени ниже", "Чтобы поймать девушку, если она упадёт");
        }
        if(event.target.getAttribute('id') == 'n4q5'){
            questionWrite("Кто должен первым здороваться | кто должен подавать руку для рукопожатия: муж, жена", "Первым здоровается муж, подаёт руку жена");
        }
        if(event.target.getAttribute('id') == 'n5q1'){
            questionWrite("Кто написал роман 'Война и мир'", "Л. Н. Толстой");
        }
        if(event.target.getAttribute('id') == 'n5q2'){
            questionWrite("Кто является главным героем романа 'Герой нащего времени'", "Грегорий Печерин");
        }
        if(event.target.getAttribute('id') == 'n5q3'){
            questionWrite("Самый знаменитый баснописец", "И. А. Крылов");
        }
        if(event.target.getAttribute('id') == 'n5q4'){
            questionWrite("Сколько было мушкетеров в романе 'Три мушкетёра'", "4");
        }
        if(event.target.getAttribute('id') == 'n5q5'){
            questionWrite("Продолжите слова: " + "<br>" + "'Идёт ......, - песнь заводит," + "<br>" + "налево - ...... говорит" + "<br>" + "Там чудеса: там ....... бродит," + "<br>" + "...... на ветвях сидит'", "Направо, сказку, леший, русалка");
        }
        if(event.target.getAttribute('id') == 'n6q1'){
            questionWrite("В какой спортивной игре судью называют 'Арбитр'", "В футболе");
        }
        if(event.target.getAttribute('id') == 'n6q2'){
            questionWrite("Самый знаменитый баскетболист", "Майкл Джордан");
        }
        if(event.target.getAttribute('id') == 'n6q3'){
            questionWrite("Самый высокооплачиваемый футболист в мире", "Леонель Месси");
        }
        if(event.target.getAttribute('id') == 'n6q4'){
            questionWrite("Действующий чемпион UFC по лёгкому весу", "Хабиб Нурмагомедов");
        }
        if(event.target.getAttribute('id') == 'n6q5'){
            questionWrite("Длинна футбольного поля", "90 - 120 метров");
        }
        if(event.target.getAttribute('id') == 'n7q1'){
            questionWrite("Актёр игравший капитана Джека Воробья в фильме 'Пираты Корибского моря'", "Джонни Депп");
        }
        if(event.target.getAttribute('id') == 'n7q2'){
            questionWrite("Актёр который сам выполнял все трюки в своих фильмах", "Джеки Чан");
        }
        if(event.target.getAttribute('id') == 'n7q3'){
            questionWrite("Актёр который сыграл главную роль в фильме 'Титаник'", "Леонардо Ди Каприо");
        }
        if(event.target.getAttribute('id') == 'n7q4'){
            questionWrite("Фильм получивший оскар за 'Лучший фильм', 'Луший режиссёр' и 'Лучший сценарий' в 2020 году", "'Паразиты'");
        }
        if(event.target.getAttribute('id') == 'n7q5'){
            questionWrite("Автор книги, по которой снят одноимённый фильм 'Оно'", "Стивен Кинг");
        }
        if(event.target.getAttribute('id') == 'n8q1'){
            questionWrite("Из какой части тела Адама создали Еву", "Ребро");
        }
        if(event.target.getAttribute('id') == 'n8q2'){
            questionWrite("Три главных Бога греции", "Зевс, Аид, Посейдон");
        }
        if(event.target.getAttribute('id') == 'n8q3'){
            questionWrite("За сколько дней Земля совершаетполный оборот вокруг Солнца", "365 дней");
        }
        if(event.target.getAttribute('id') == 'n8q4'){
            questionWrite("Прежнее название Стамбула", "Константинополь");
        }
        if(event.target.getAttribute('id') == 'n8q5'){
            questionWrite("Какая буква состоит из трети алфавита", "(Ъ) твердый знак");
        }
        
    }

})