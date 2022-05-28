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