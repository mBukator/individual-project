let userName = prompt("Введіть ваше ім`я");
if (userName != null && userName != "") {
   document.getElementById("userName").textContent = userName;
}
let roundCounter = 0, userNumber, compNumber, userScore = 0, compScore = 0;
let cards = {
    2:{ // Валет
        0: `<use href="img/svg-cards.svg#club_jack"/>`,
        1: `<use href="img/svg-cards.svg#diamond_jack"/>`,
        2: `<use href="img/svg-cards.svg#heart_2"/>`,
        3: `<use href="img/svg-cards.svg#spade_2"/>`
    },
    3:{ // Королева
        0: `<use href="img/svg-cards.svg#club_queen"/>`,
        1: `<use href="img/svg-cards.svg#diamond_queen"/>`,
        2: `<use href="img/svg-cards.svg#heart_queen"/>`,
        3: `<use href="img/svg-cards.svg#spade_queen"/>`
    },
    4:{ // Король
        0: `<use href="img/svg-cards.svg#club_king"/>`,
        1: `<use href="img/svg-cards.svg#diamond_king"/>`,
        2: `<use href="img/svg-cards.svg#heart_king"/>`,
        3: `<use href="img/svg-cards.svg#spade_king"/>`
    },
    6:{ // 6
        0: `<use href="img/svg-cards.svg#club_6"/>`,
        1: `<use href="img/svg-cards.svg#diamond_6"/>`,
        2: `<use href="img/svg-cards.svg#heart_6"/>`,
        3: `<use href="img/svg-cards.svg#spade_6"/>`
    },
    7:{ // 7
        0: `<use href="img/svg-cards.svg#club_7"/>`,
        1: `<use href="img/svg-cards.svg#diamond_7"/>`,
        2: `<use href="img/svg-cards.svg#heart_7"/>`,
        3: `<use href="img/svg-cards.svg#spade_7"/>`
    },
    8:{ // 8
        0: `<use href="img/svg-cards.svg#club_8"/>`,
        1: `<use href="img/svg-cards.svg#diamond_8"/>`,
        2: `<use href="img/svg-cards.svg#heart_8"/>`,
        3: `<use href="img/svg-cards.svg#spade_8"/>`
    },
    9:{ // 9
        0: `<use href="img/svg-cards.svg#club_9"/>`,
        1: `<use href="img/svg-cards.svg#diamond_9"/>`,
        2: `<use href="img/svg-cards.svg#heart_9"/>`,
        3: `<use href="img/svg-cards.svg#spade_9"/>`
    },
    10:{ // 10
        0: `<use href="img/svg-cards.svg#club_10"/>`,
        1: `<use href="img/svg-cards.svg#diamond_10"/>`,
        2: `<use href="img/svg-cards.svg#heart_10"/>`,
        3: `<use href="img/svg-cards.svg#spade_10"/>`
    },
    11:{ // Туз
        0: `<use href="img/svg-cards.svg#club_1"/>`,
        1: `<use href="img/svg-cards.svg#diamond_1"/>`,
        2: `<use href="img/svg-cards.svg#heart_1"/>`,
        3: `<use href="img/svg-cards.svg#spade_1"/>`
    },
};
function Randomizer() {
    let rndm;
    do {
        rndm = Math.floor(Math.random() * 10 + 2);
    } while (rndm == 5);
    return rndm;
}
function Generate() {
    if (roundCounter == 3) {
        if (userScore > compScore) {
            alert(`${document.getElementById("userName").innerText} переміг! Ура люди рулять`);
            location.reload();
            return;
        }
        else if (compScore > userScore) {
            alert(`Комп'ютер переміг! Ха-ха Сара Коннор в шоці, тебе переміг комп'ютер`);
            location.reload();
            return;
        } else {
            alert("Нічия!")
            location.reload();
            return;
        }
    }
    userNumber = Randomizer();
    compNumber = Randomizer();
    document.getElementById("userCard").innerHTML = cards[userNumber][Math.floor(Math.random() * 4)];
    document.getElementById("compCard").innerHTML = cards[compNumber][Math.floor(Math.random() * 4)];
    console.log(`user:comp - ${userNumber}:${compNumber}`);
    document.getElementById("userScore").innerText = userScore += userNumber;
    document.getElementById("compScore").innerText = compScore += compNumber;
    roundCounter++;
    document.getElementById("roundCount").innerText = `Спроба ${roundCounter} з 3`;
}