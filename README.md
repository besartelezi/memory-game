# I forgot what the title of this game is (haha get it it's called memory)
[Play my own fun version of memory here!](https://besartelezi.github.io/memory-game/)

Memory! A game beloved by many, but for those that aren't familiar with this game, do not worry! I'll try to give a short explanation. </br>

Memory is a game where there are a bunch of cards placed face-down in front of you. If you flip the card, you're greeted by an image. You then have to pick out another card. If the card you picked out has the same image on it as your previously picked card, you take out both cards. Then you try again. </br>

When you turn a card, and then pick out a different card, but only this time the images do not match, you flip both cards back to their original position. You need to remember what cards had what image, hence the name of the game, **memory**! </br>

You win once there are no cards left anymore on the field. 

## Flipping the first card
The very first thing that I will do, is create an array that will be the used as the card deck. I did a similar thing in a previous project, where I created a blackjack game. [Make sure to check it out here!](https://besartelezi.github.io/js-21-card-game/) </br>

The cards will have a name and an image URL. I might give them an ID number as well just in case if the need to use it ever arises. But starting out like this does have me wondering:
* Should I create an array of cards that also includes the second copy of all cards
* Or should I create an array of cards without their copies, and have my Javascript code run through the deck **twice** to create the pairs.

I would feel more comfortable going with the first option, but alas, momma didn't raise no beachgoer. So I will go with the second option and figure out a way to do this as efficiently as possible.

What I want the function to do is:
* Generate a random index number
* Push the corresponding card of said index number to a new array
* Once the new array contains two of the same cards, it will splice that card out of the original deck
  * I think it might work, if I create a third array, that contains all the generated index numbers. 
    * This won't work, since the splice function cuts out an object and this changes the entire array, so there is a big chance for the same index number to appear more than 2 times.
* This will keep on going, until the array CardDeck is out of cards

##### I still haven't found a way to solve this issue, so for the time being, I will just add the duplicates in the cardDeck. This is the easiest and most logical conclusion I could come up with.

## Flipping
Flipping the cards is something that I have just figured out how to do and it is something that I'm really proud of. I'll explain why by adding my code here:
````
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
````
I have finally found a way to select all elements of a class, and let a function run for all those elements within that class, without writing 421 lines of code. The following part is the most important of the code in my opinion.
````
const flipCards = (flip) => {
        console.log(flip.target.id);
````
I added a name to the function (that "flip" in between the brackets), and referred to that in my code. By using the flip.target, I can select the things I want to select of whatever the user clicks on! Great success!

## Flipping Part Two : Electric Boogaloo
Now, I need to add all the needed functionalities to the flipping function, what I want this function to do is:
- [x] When the user clicks on a card, it will flip over.
  - [x] There can't be more than 2 cards visible on the field at the same time. 
  - [ ] Once the user has flipped two cards, one of the following will happen
    - [ ] If the cards match, they will be removed from the playing field (and added to another array, called playerFoundPairs).
    - [x] If the cards don't match, the two cards will be simply flipped back.
  - [ ] Create an array that will be used to register what cards the user has flipped.
    - [ ] If the cards in that array match, then both those cards will be removed from selected cards array, to the found pairs array.

This is everything I can currently think of. But as a precaution, I want to also write down that, since I'm working with index numbers and arrays, and these might cause issues depending on my current code, I might have to create an extra array, filled with empty divs, that will replace the cards on the field. Because:
* Either the layout will be ruined and the user can't properly remember what cards were on the field in what position.
* A bug can be caused in the code, since I'll be removing objects from the array, making it so that the index numbers of the backside of the cards might not correspond to the index numbers of the flipped images. This is highly unlikely though, but worth noting.
