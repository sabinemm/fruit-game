# JUICY FRUIT MEMORY GAME
## Interactive Front-end Web Development Project

***Add demo GIF here***

***[Play me](https://sabinemm.github.io/fruit-game/)***

## Purpose
The aim of this project was to create and build a single page application - playable game that that increases in complexity over the course of the game and challenges the players memory.

## UX 
Starting with a desktop first approach I created a very basic wireframe. [Wireframe and notes](https://res.cloudinary.com/www-madine-se/image/upload/v1585001794/fruit_game/Untitled_Artwork_2_zccka0.jpg) from first mentor call. I did not find the need to create any more detailed mockups and wireframes because the design is so simple. 

The design of this page is clean and fresh. I used neutral colors for the background and the back of the cards so the user can concentrate on the front of the cards which have different pastel backgrounds and the fruits are in rich colors. 

To create the cards I created a Photoshop file with numerous artboards and imported the back of the card and the individual fruit vectors. Then added pastel backgrounds in different tones. The  screenshot of initial card design can be found [here](https://res.cloudinary.com/www-madine-se/image/upload/v1585001211/fruit_game/Screenshot_2020-03-23_at_21.49.36_gvqbya.png).

Goals to be achieved of this website: 

* Create a playable game
* Simple and straightforward use
* Play through varying difficulty levels
* Ability to play the game on different sized screens

I got rather lucky finding the perfect free fruit vectors. It took only a few minutes of googling. I'm always very picky about the images I choose so finding them so fast was surprising.

## Features
Features of this website are:
* Game starts with a "Click to start" overlay
* The cards sligthy increase in size when hovered over
* Pointer changes to hand when hovered over the cards
* Cards have different images on front and the same on the back
* Cards flip with the according sound for realism
* Upbeat sound for moving on to the next level
* "Click To Play Next Level" overlay appears between levels
* Time countdown
* Flips are counted throughout the game
* "Victory" overlay appears when the game is finished with an option to click to restart 

###  Future features
- [ ] Optional feature to send end score of the game to your email
- [ ] Several levels
- [ ] Mobile friendly (cards strething accordingly across different screens)
- [ ] Pause game
- [ ] "Are you sure you want to give up?" popup if trying to close the page mid game
- [ ] On and off button for background music

## Technologies used
Below are a list of the programming languages, technologies and frameworks used for this website.

* HTML5
* CSS3
* JavaScript
* Google Fonts
* Visual Studio Code + Live Server
* Git
* Github
* Github pages
* Markdown (README.md file)
* [Google Fonts](https://fonts.google.com)
* Google Chrome developer tools
* Firefox Inspector
* Safari Web Inspector 
* [Procreate](https://procreate.art) on iPad (mockup drawing)
* Adobe Photoshop CC (creating cards)
* Adobe Illustrator CC (importing & editing fruit vectors)
* [Cloudinary](https://cloudinary.com/) to store all images
* [Favicon.io](https://favicon.io/favicon-converter/)

## Testing
* [HTML validator](https://validator.w3.org/#validate_by_input)
* [CSS validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
* [JsHint](https://jshint.com)

I conducted testing on several platforms and browsers to make sure that game worked properly and looked correct everywhere. I asked friends and peers for their feedback and to send me screenshots of errors they encountered.

Devices and platforms used for testing:

* Iphone X 
    - Safari
    - Chrome
    - Brave
* Ipad Pro 12.9" 2018
    - Safari
    - Chrome
* MacBook Pro 13" MacOS Catalina
    - Safari
    - Chrome
    - Firefox
* MacBook Pro 13" Windows 10
    - Chrome
    - Firefox
    - Microsoft Edge
* OnePlus 5T
    - Firefox
    - Chrome

### Manual testing
1. Clicking on overlay over the whole page
2. Turning all cards, clicking on all cards fast

### Errors
1.  ***NOT YET RESOLVED*** The first error I encountered was with Safari (on all devices) while turning cards. [Click here to see video](https://res.cloudinary.com/www-madine-se/video/upload/v1585779094/fruit_game/safari-error-fruit-game_am8yt1.mov). During the animation of card turning it glitches and half of the other side is visible during animation. I added -webkit- to transform styles but it did not solve the issue.  
2. Resolved. Deployed website on Github pages opened on Safari sometimes lets match not actually matching cards. 
3.  ***NOT YET RESOLVED***  Reaching level two, cards duplicate function called twice.
4. ***NOT YET RESOLVED*** When failing with time running out, game moves on to the next level. 
5. Fixed. Too many papayas on level 2. 
6. ***NOT YET RESOLVED*** Duplicated on level 3 from level 2.

## Deployment
The website was made by creating and new repository in Github, copying [web url](https://github.com/sabinemm/fruit-game.git) and cloned with built in Git control in Visual Studio Code. Git was used for version control and pushed to a repository [hosted](https://sabinemm.github.io/fruit-game/) on Github pages. 

### How to deploy code locally
If you wish to run this code locally: 

* Download or clone the code from the Github [repository](https://github.com/sabinemm/fruit-game.git)
* Click on "Clone or download" to Download ZIP or clone by copying the link
* Uncompress the ZIP folder to view or clone into VS Code using Source Control and paste the link in "Clone" window

## Credits
### Code
* HTML and CSS part of the [tutorial](https://www.youtube.com/watch?v=28VfzEiJgy4) 
* Javascript [tutorial](https://www.youtube.com/watch?v=3uuQ3g92oPQ) 
* [StackOverflow](https://stackoverflow.com/questions/60885320/inserts-a-div-and-a-link-into-the-div-twice-and-does-this-with-several-links-js)
* [Maranatha Ilesanmi](https://github.com/mbilesanmi) helping me with setting up local storage for levels 
* My friend Rūta with helping me to put cards in the constructor and hinting me towards the right things to do
* [OnClick refresh](https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click)

### Images
* [Fruit composition](https://www.freepik.com/free-vector/tropical-fruits-4-colorful-compositions-set_3791460.htm#page=2&query=fruits++mango&position=34)
* [Back of the card pattern](https://www.freepik.com/free-vector/hand-drawn-fruit-mobile-pattern_3069263.htm#page=1&query=fruits&position=38)
* [Individual fruits](https://www.freepik.com/free-vector/tropical-fruits-retro-cartoon-icons-set_3791458.htm#page=2&query=fruits++mango&position=15)

### Audio
* [Card flip](http://www.orangefreesounds.com/card-flip-sound-effect/)
* [Matched](https://www.zapsplat.com/music/game-sound-synthesized-bright-pluck-good-for-success-award-or-achievement-1/)
* [Level up](https://www.zapsplat.com/music/advance-award-or-other-positive-game-tone-plucked-nylon-style-sound-1//)
* [Victory](https://www.zapsplat.com/music/cartoon-success-fanfare/)
* [Game over](https://www.zapsplat.com/music/game-sound-basic-digital-retro-incorrect-wrong-error-negative-tone-10/)
* [Background audio](https://www.zapsplat.com/music/forest-environment-ambience-clearing-spring-summer-birds/)

### Acknowledgements
I was initally tempted to create a Snakes and Ladders game. I had downloaded one version of it on my Ipad and found it to be poorly made. As it would be too difficult for me to create at this point and found a great tutorial by [Web Dev Simplified](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw) for memory game and decided to go with it.

Big thanks to my mentor [Maranatha Ilesanmi](https://github.com/mbilesanmi) for helping and guiding me through the whole process of developing this game. 
