let mbAnswers = [
    "Безумовно", "Це однозначно так", "Без сумніву", "Так - безумовно",  "Ви можете на це покластися", "Як я бачу, так", "Швидше за все", "Перспективи хороші", "Ознаки вказують на те, що так", "Так", "Відповідь нечітка, спробуйте ще раз", "Запитайте пізніше", "Не можу передбачити зараз", "Зосередьтеся і запитайте ще раз", "Не розраховуйте на це", "Моя відповідь - ні", "Мої джерела кажуть, що ні", "Перспективи не дуже хороші"
];


function getAnswer() {
    if (document.getElementById("userQuestion").value == null || document.getElementById("userQuestion").value == " ") {
        alert("Введіть питання");
        return;
    }
    document.getElementById("answer").innerText = mbAnswers[Math.floor(Math.random() * mbAnswers.length)];
}


let body = document.getElementsByTagName("body")[0];
body.style.backgroundImage = "url(img/sky.jpg)";
body.style.textAlign = "center";


body.innerHTML += `<p id = "mbHeader">Магічна куля</p>`;
let mbHeader = document.getElementById("mbHeader");
mbHeader.style.color = "white";
mbHeader.style.fontSize = "36px"
mbHeader.style.fontWeight = "900"


body.innerHTML += `<p id = "p_Top">Просто задайте питання та натисніть кнопку і дізнайтесь що думає куля</p>`;
let p_Top = document.getElementById("p_Top");
p_Top.style.color = "white";
p_Top.style.fontSize = "24px"


body.innerHTML += `<p id = "p_Bottom">Для кращого результату переконайтесь в тому, що ви дуже сильно сконцентрувались на вашому питанні</p>`;
let p_Bottom = document.getElementById("p_Bottom");
p_Bottom.style.color = "white";
p_Bottom.style.fontSize = "24px"


body.innerHTML += `<input type="text" id="userQuestion"><br>`
let question = document.getElementById("userQuestion");
question.style.width = '400px';
question.style.height = '30px';
question.style.fontSize = "16px";
question.style.backgroundColor = 'white';
question.style.color = 'black';
question.style.border = '3px solid black';
question.style.textAlign = 'center';
question.style.margin = "0 0 20px 0"


body.innerHTML += `<img src="img/magicball.png" width=350" id="magickBall">`
let magicBall = document.getElementById("magickBall");
magicBall.style.borderRadius = "50%";
magicBall.style.cursor = "pointer";


body.innerHTML += `<div id="answer"></div>`;
let answer = document.getElementById("answer");
answer.style.color = "black";
answer.style.fontSize = "18px";
answer.style.position = "relative";
answer.style.top = "-25vh";
answer.style.fontWeight = "900";


body.innerHTML += `<div><button id="resultBtn">Дізнатись відповідь кулі</button></div>`
let resultBtn = document.getElementById("resultBtn");
resultBtn.style.width = "250px";
resultBtn.style.height = "40px";
resultBtn.style.marginTop = "5vh";
resultBtn.style.borderRadius = "50%"
resultBtn.style.fontWeight = "bold"


document.getElementById("resultBtn").addEventListener("click", getAnswer)