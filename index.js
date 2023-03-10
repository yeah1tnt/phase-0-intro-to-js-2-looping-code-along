// Code your solutions in this file
function writeCards(gifts, type){
    const cards = [];
    for(let i = 0; i < gifts.length;i++){
        cards.push(`Thank you, ${gifts[i]}, for the wonderful ${type} gift!`);
    }
    return cards;
}

/*function countDown(number){
    let count = 0;
    for(let i = 0; i <= number; i++){
        console.log(i);
        count++;
    }
    return count;
}*/

function countDown(number){
    let count = 0;
    let i = number;
    while(i > -1){
        console.log(i);
        i--;
        count++;
    }
    return count;
}