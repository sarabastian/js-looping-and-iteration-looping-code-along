// Code your solutions in this file
function writeCards(array, event) {
    let cards = []
    for (let i = 0; i < array.length; i++) {
    cards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return cards
};

function countDown(n) {
    let i = 10;
    while (i >= 0) {
        console.log(i--)
    }
}