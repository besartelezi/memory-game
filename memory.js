let CardDeck = [
    {
        name:"CuteMonkey",
        url:"images/cutemonkey.jpg",
        id:1
    },
    {
        name:"Dream",
        url:"images/dream.jpg",
        id:2
    },    {
        name:"MangaMonkey",
        url:"images/mangamonkey.jpg",
        id:3
    },    {
        name:"MonkeyHaircut",
        url:"images/monkeyhaircut.jpg",
        id:4
    },    {
        name:"MonkeyHoldingBanana",
        url:"images/monkeyholdingbanana.jpg",
        id:5
    },    {
        name:"MonkeysHoldingHands",
        url:"images/monkeysholdinghands.jpg",
        id:6
    },    {
        name:"SpongebobMonkey",
        url:"images/spongebobmonkey.jpg",
        id:7
    },    {
        name:"Zucc",
        url:"images/zucc.jpg",
        id:8
    },
    {
        name:"CuteMonkey",
        url:"images/cutemonkey.jpg",
        id:1
    },
    {
        name:"Dream",
        url:"images/dream.jpg",
        id:2
    },    {
        name:"MangaMonkey",
        url:"images/mangamonkey.jpg",
        id:3
    },    {
        name:"MonkeyHaircut",
        url:"images/monkeyhaircut.jpg",
        id:4
    },    {
        name:"MonkeyHoldingBanana",
        url:"images/monkeyholdingbanana.jpg",
        id:5
    },    {
        name:"MonkeysHoldingHands",
        url:"images/monkeysholdinghands.jpg",
        id:6
    },    {
        name:"SpongebobMonkey",
        url:"images/spongebobmonkey.jpg",
        id:7
    },    {
        name:"Zucc",
        url:"images/zucc.jpg",
        id:8
    },
]
let currentCardsOnField = [];
let playerSelectCards = [];
let playerFoundPairs = [];
const buttonsArea = document.getElementById("Buttons");
const startButton = document.getElementById("Start");

//places 16 cards on the field
const StartTheGame = () => {
    for (let i=0; i < 16; i++){
        let RandomCardIndex = Math.floor(Math.random()*CardDeck.length);
        let randomCard = CardDeck[RandomCardIndex];
        currentCardsOnField.push(randomCard);
        CardDeck.splice(RandomCardIndex, 1);
        //Creating flipped cards
        let CardBackside = document.createElement("img");
        CardBackside.setAttribute("class", "Cards");
        CardBackside.setAttribute("id", i)
        CardBackside.src ="images/backcard.png";
        document.getElementById("PlayingField").appendChild(CardBackside);
    }
    buttonsArea.removeChild(startButton)
    //flipping cards
    const backsideCards = document.getElementsByClassName("Cards");
    const flipCards = (flip) => {
        console.log(flip.target.id);
        console.log([currentCardsOnField[flip.target.id].name])
        console.log(currentCardsOnField[flip.target.id].url)
        flip.target.src = currentCardsOnField[flip.target.id].url
    };
    for (let i =0; i < backsideCards.length; i++){
        backsideCards[i].addEventListener("click", flipCards)
    }
}
startButton.addEventListener("click", StartTheGame);