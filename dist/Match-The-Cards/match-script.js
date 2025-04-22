"use strict";
// const uniqueValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; // 8 unique → 16 total
// const uniqueValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const uniqueValues = [1, 2, 3, 4, 5, 6, 7, 8];
const cardValues = shuffle([...uniqueValues, ...uniqueValues]);
const cards = cardValues.map((value, index) => ({
    id: index,
    value,
    isFlipped: false,
    isMatched: false,
}));
const gameContainer = document.getElementById("main-grid");
//displays or renders the cards first time and everytime the card is clicked (handleCardClick)
function renderCards() {
    gameContainer.innerHTML = "";
    cards.forEach(card => {
        const cardEl = document.createElement("div");
        cardEl.className = `w-20 h-28 rounded-xl flex items-center justify-center text-4xl font-bold transition duration-300 shadow-xs shadow-yellow-400 ${card.isFlipped || card.isMatched ? "bg-red-700 text-white cursor-default" : "bg-neutral-700 cursor-pointer hover:scale-105 hover:-translate-y-1"}`;
        cardEl.textContent = card.isFlipped || card.isMatched ? String(card.value) : "";
        cardEl.addEventListener("click", () => handleCardClick(card.id));
        gameContainer.appendChild(cardEl);
    });
}
let flippedCards = [];
function handleCardClick(id) {
    const card = cards.find(c => c.id === id);
    if (!card || card.isFlipped || card.isMatched || flippedCards.length === 2)
        return;
    card.isFlipped = true;
    flippedCards.push(card);
    renderCards();
    if (flippedCards.length === 2) {
        const [first, second] = flippedCards;
        if (first.value === second.value) {
            first.isMatched = true;
            second.isMatched = true;
            flippedCards = [];
        }
        else {
            setTimeout(() => {
                first.isFlipped = false;
                second.isFlipped = false;
                flippedCards = [];
                renderCards();
            }, 1000);
        }
    }
}
function shuffle(array) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}
// Initialize
renderCards();
