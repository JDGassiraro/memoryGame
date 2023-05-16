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

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement("img");
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        gridDisplay.append(card);
        card.addEventListener('click', flipCard);//allows the card to respond to being clicked on and when it is, to call the flipCard()
    }
}
createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log(cards);
    console.log('Check for a match!');
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');
        alert("You have clicked the same image!")
        cardsChosen = [];//resets the cardsChosen array
        cardsChosenIds = [];//resets the cardsChosenIds array
        return;//prevents the computer from completeing the method and continuing on to the other if statements
    }
    if( cardsChosen[0] == cardsChosen[1]){
        alert('You found a match!');
        cards[optionOneId].setAttribute('src','images/white.png');
        cards[optionTwoId].setAttribute('src','images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);//removes EventListener on line 78
        cards[optionTwoId].removeEventListener('click', flipCard);//removes EventListener on line 78
        cardsWon.push(cardsChosen);
    } else{
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');
        alert('Sorry, try again!');
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];//resets the cardsChosen array
    cardsChosenIds = [];//resets the cardsChosenIds array
    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congratulations, you found them all!';
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