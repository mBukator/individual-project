let userName = prompt("Введіть ваше ім'я");
if (userName != null && userName != "")
   document.getElementById("username").textContent = userName;

let userNumber;
let opponentNumber;
let userScore = 0;
let opponentScore = 0;

function Generate() {
    if (userScore == 3) {
        alert(`${document.getElementById("username").innerText} переміг! Після натискання OK, сайт перезагрузиться`);
        location.reload();
        return;
    }
    if (opponentScore == 3) {
        alert("Суперник переміг! Після натискання OK, сайт перезагрузиться");
        location.reload();
        return;
    }

    userNumber = Math.floor(Math.random() * 10);
    opponentNumber = Math.floor(Math.random() * 10);
    document.getElementById("userNumber").innerText = userNumber;
    document.getElementById("opponentNumber").innerText = opponentNumber;
    if (userNumber > opponentNumber) {
        console.log(`user + ${userNumber}:${opponentNumber}`);
        document.getElementById("userScore").innerText = ++userScore;
    }
    else if (userNumber < opponentNumber) {
        console.log(`opponent + ${userNumber}:${opponentNumber}`);
        document.getElementById("opponentScore").innerText = ++opponentScore;
    }
    else {
        console.log(`Нічия ${userNumber}:${opponentNumber}`);
        alert("Нічия");
    }
}