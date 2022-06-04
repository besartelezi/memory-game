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
]

const StartTheGame = () => {
    for (let i=0; i < CardDeck.length; i++){
        let RandomCardIndex = Math.floor(Math.random()*CardDeck.length);
        console.log(RandomCardIndex)
        let RandomImage = document.createElement("img");
        RandomImage.src ="images/backcard.png"
        document.getElementById("PlayingField").appendChild(RandomImage);
    }
}

document.getElementById("Start").addEventListener("click", StartTheGame)

