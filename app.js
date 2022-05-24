const spainA = document.querySelector(".spain-a");
const spainB = document.querySelector(".spain-b");
const spainC = document.querySelector(".spain-c");

const italyA = document.querySelector(".italy-a");
const italyB = document.querySelector(".italy-b");
const italyC = document.querySelector(".italy-c");

const germanyA = document.querySelector(".germany-a");
const germanyB = document.querySelector(".germany-b");
const germanyC = document.querySelector(".germany-c");

const polandA = document.querySelector(".poland-a");
const polandB = document.querySelector(".poland-b");
const polandC = document.querySelector(".poland-c");

const score = document.querySelector(".score");

let currentScore = 0;
score.textContent = `SCORE: ${currentScore} / 4`;

// SPAIN
const incorrectAnswerSpain = function() {
    document.querySelector(`.spain-correct`).classList.add("hidden");
    document.querySelector(".spain-incorrect").classList.remove("hidden");
}

spainA.addEventListener("click", incorrectAnswerSpain);

spainB.addEventListener("click", function() {
    document.querySelector(".spain-correct").classList.remove("hidden");
    document.querySelector(".spain-incorrect").classList.add("hidden");
    if(currentScore < 4) currentScore++;
    score.textContent = `SCORE: ${currentScore} / 4`;
});

spainC.addEventListener("click", incorrectAnswerSpain);

// ITALY
const incorrectAnswerItaly = function() {
    document.querySelector(`.italy-correct`).classList.add("hidden");
    document.querySelector(".italy-incorrect").classList.remove("hidden");
}

italyA.addEventListener("click", incorrectAnswerItaly);
italyB.addEventListener("click", incorrectAnswerItaly);

italyC.addEventListener("click", function() {
    document.querySelector(".italy-correct").classList.remove("hidden");
    document.querySelector(".italy-incorrect").classList.add("hidden");
    if(currentScore < 4) currentScore++;
    score.textContent = `SCORE: ${currentScore} / 4`;
});

// GERMNAY 
const incorrectAnswerGermany = function() {
    document.querySelector(`.germany-correct`).classList.add("hidden");
    document.querySelector(".germany-incorrect").classList.remove("hidden");
}

germanyA.addEventListener("click", incorrectAnswerGermany);
germanyB.addEventListener("click", incorrectAnswerGermany);

germanyC.addEventListener("click", function() {
    document.querySelector(".germany-correct").classList.remove("hidden");
    document.querySelector(".germany-incorrect").classList.add("hidden");
    if(currentScore < 4) currentScore++;
    score.textContent = `SCORE: ${currentScore} / 4`;
});

// POLAND 
const incorrectAnswerPoland = function() {
    document.querySelector(`.poland-correct`).classList.add("hidden");
    document.querySelector(".poland-incorrect").classList.remove("hidden");
}

polandA.addEventListener("click", function() {
    document.querySelector(".poland-correct").classList.remove("hidden");
    document.querySelector(".poland-incorrect").classList.add("hidden");
    if(currentScore < 4) currentScore++;
    score.textContent = `SCORE: ${currentScore} / 4`;
});

polandB.addEventListener("click", incorrectAnswerPoland);
polandC.addEventListener("click", incorrectAnswerPoland);
