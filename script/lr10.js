let userName = prompt("Введіть ваше ім'я");
if (userName != null && userName != "")
   document.getElementById("username").textContent = userName;
document.getElementById("startGame").addEventListener("click", Generate);

let roundCounter = 1, maxRound = 3;
let slotElements = [
    "🍇",
    "🍓",
    "🍋",
    "➐",
    "🍌",
    "🍉",
    "🍎",
    "🍒",
    "💎"
];

function Victory() {
    for (let i = 0; i < 3; i++) {
        if (RowTest(i)) {
            return true;
        }
    }
    return false;
}

function RowTest(currentRow) {
    for (let j = 0; j < 2; j++)
        if(document.getElementById(`${currentRow}${j}`).innerHTML !=
        document.getElementById(`${currentRow}${j+1}`).innerHTML)
            return false;
    return true;
}

function Randomizer() {
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
            document.getElementById(`${i}${j}`).innerHTML =
            slotElements[Math.floor(Math.random() * slotElements.length)];
        }
    }
}

function Generate() {
    if (Victory()) {
        alert("ВИ ПЕРЕМОГЛИ! ВИ ПРЯМ ВЕЗуНЧИК!");
        roundCounter = 1, maxRound = 3;
        document.getElementById("roundCount").innerHTML = `Спроба ${roundCounter} з ${maxRound}`;
        Randomizer();
        return;
    } else if (roundCounter == maxRound) {
        alert("ВИ ПРОГРАЛИ! НЕ ЗАСМУЧУЙТЕСЬ(");
        roundCounter = 0, maxRound = 3;
        document.getElementById("roundCount").innerHTML = `Спроба ${roundCounter} з ${maxRound}`;
        Randomizer();
        return;
    }
    Randomizer();
    document.getElementById("roundCount").innerHTML = `Спроба ${++roundCounter} з ${maxRound}`;
}