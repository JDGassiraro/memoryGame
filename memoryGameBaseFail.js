/**Memory Game uses the following functions:
 * .querySelector()
 * .Math.random()
 * .length
 * .createElement()
 * .setAttribute()
 * .getAttribute()
 * .append()
 * alert()
 * .push()
 * setTimeout()
 * .querySelectorAll()
 * .removeEventListener()
 * .textContent**/
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheesburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheesburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]
cardArray.sort(() => 0.5 -Math.random()) //will sort the array depending if 0.5 is greater or less than Math.random
const resultDisplay = document.querySelector('#result');
const gridDisplay = document.querySelector('#grid');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsMatched = [];

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement("img");
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        gridDisplay.append(card);
        card.addEventListener('click', flipCard);
    }
}
createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('#grid, img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log(cards);
    console.log('check for a match!');
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src',images/white.png); //sets the card in the first array slot of cardsChosenIds to have a white picture instead of its orginial picture
        cards[optionTwoId].setAttribute('src',images/white.png); //sets the card in the second array slot of cardsChosenIds to have a white picture instead of its orginial picture
        alert('You have clicked the same image!')
    }


    if(cardsChosen[0] == cardsChosen[1]){
        alert('You found a match!'); //sends a pop-up saying You found a match! that can be closed out by clicking ok
        cards[optionOneId].setAttribute('src',images/white.png); //sets the card in the first array slot of cardsChosenIds to have a blank picture instead of its orginial picture
        cards[optionTwoId].setAttribute('src',images/white.png); //sets the card in the second array slot of cardsChosenIds to have a blank picture instead of its orginial picture
        cards[optionOneId].removeEventListener('click, flipCard');//prevents the player from being able to click on the card the first array slot of cardsChosenIds anymore
        cards[optionTwoId].removeEventListener('click, flipCard');//prevents the player from being able to click on the card the second array slot of cardsChosenIds anymore
        cardsMatched.push(cardsChosen);
    } else{
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Sorry, try again!');
    }
    resultDisplay.innerHTML = cardsMatched.length;
    let cardsChosen = [];//empties the cardsChosen array
    let cardsChosenIds = [];//empties the cardsChosenIds array

    if(cardsMatched.length === cardArray.length/2){
        resultDisplay.innerHTML = "Congratulations, you found them all!"
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500);//pauses for 500 milliseconds before going to checkMatch()
    }
}