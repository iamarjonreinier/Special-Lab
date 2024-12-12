const toCard2 = document.getElementById('toCard2');
const toCard1 = document.getElementById('toCard1');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');

toCard2.addEventListener('click', () => {
 card1.classList.add('hidden');
 card2.classList.remove('hidden');
});

toCard1.addEventListener('click', () => {
 card2.classList.add('hidden');
 card1.classList.remove('hidden');
});