# JUICY FRUIT MEMORY GAME
#### Code Institute Interactive Front-end Web Development Project

<p align="center">
  <img width="40%" src="https://res.cloudinary.com/www-madine-se/image/upload/v1587327312/fruit_game/JuicyCombo_kn64cx.png">
</p>

<p align="center"><a href="https://sabinemm.github.io/fruit-game/">
Play the game</a></p>

## Table of Contents

- [**About**](#About)
- [**UX**](#UX)
  - [Goals](#Goals)
  - [Research](#Research)
  - [Wireframes](#Wireframes)
  - [Design](#Design)
- [**Features**](#Features)
    - [Functionality](#Functionality)
    - [Existing features](#Existing-features)
    - [Future features](#Future-features)
- [**Technologies used**](#Technologies-used)
- [**Testing**](#Testing)
    - [Manual testing](#Testing)
    - [Errors](#Errors)
- [**Deployment**](#Deployment)
- [**Credits**](#Deployment)
    - [Code](#Code)
     - [Images](#Images)
     - [Audio](#Audio)
- [**Acknowledgements**](#Acknowledgements)
## About

The purpose of this project was to create and build a single page application - classical card matching game that that increases in complexity over the course of the game. It requires observation, concentration and a good memory to win. The game is also known as Concentration, Pelmanism, Shinkei-suijaku, Pexeso and Pairs.
You can read more about Concentration game visiting [Wikipedia](https://en.wikipedia.org/wiki/Concentration_(card_game)) page and the rules of a classic table card game [here](https://www.classicgamesandpuzzles.com/Memory.html).

I could choose between 3 different projects and chose to create a memory game because my goal is to learn more about animation and logic. I learned a lot during this project e.g. how to use classes and constructors. Also, I realised my weak areas that require improvement e.g. understanding scope and algorithms. 

Game name idea simply comes from the images I used for the project. 

I would improve a lot of things if I had more time. For example - count the score throughout the game and create a high score board, animate everything in a more appealing way, refine the design, make the game beautifully responsive on all devices.

## UX
### Goals
Goals to be achieved of this website: 

* Create a playable game
* Simple and straightforward use
* The object of the game is to collect the most matching card pairs.
* Play through varying difficulty levels
* Ability to play the game on different sized screens

### Research

To understand the game, I researched existing versions of the game. This gave me a clear idea what functionality and design my version of the game will have.

Most versions had square or rectangular cards. Many versions of the game had extremely colorful clashing patterns that distract the player from memorizing the cards. This is my reasoning why I chose the particular design.

### Wireframes
Starting with a desktop first approach I created a very basic wireframe. [Wireframe and notes](https://res.cloudinary.com/www-madine-se/image/upload/v1585001794/fruit_game/Untitled_Artwork_2_zccka0.jpg) from first mentor call. I did not find the need to create any more detailed mockups and wireframes because the design is so simple.

### Design
The design of this page is clean and fresh. I used neutral colors for the background and the back of the cards so the user can concentrate on the front of the cards which have different pastel backgrounds and the fruits are in rich colors. 

To create the cards I created a Photoshop file with numerous artboards and imported the back of the card and the individual fruit vectors. Then added pastel backgrounds in different tones. The screenshot of initial card design can be found [here](https://res.cloudinary.com/www-madine-se/image/upload/v1585001211/fruit_game/Screenshot_2020-03-23_at_21.49.36_gvqbya.png).

I adjusted the brightness of [back](https://res.cloudinary.com/www-madine-se/image/upload/v1587330036/fruit_game/cards/card-back3_vy5epc.jpg) of the cards and created [game title](https://res.cloudinary.com/www-madine-se/image/upload/v1587327312/fruit_game/JuicyCombo_kn64cx.png) with fruit and transparent background later on in the project using AI and PS.

I got rather lucky finding the perfect free fruit vectors. It took only a few minutes of googling. I'm always very picky about the images I choose so finding them so fast was surprising.

## Features
### Functionality

###  Existing features
Features of this website are:
* Game starts with a "Click to start" overlay
* The cards sligthy increase in size when hovered over
* Pointer changes to hand when hovered over the cards and overlays
* Cards have different images on front and the same pattern on the back
* Cards flip with the according sound for realism
* Upbeat sound for moving on to the next level
* "Woop! Level Up!" and "Click to play next" overlay appears between levels
* Time countdown - user has 60 seconds to pass each level
* Flips are counted throughout the game
* Several levels
* "Victory" overlay appears when the game is finished with an option to click to restart 
* On and off button for background music
* "Game Over" overlay appears when time runs out.

###  Future features
- [ ] Optional feature to send end score of the game to your email
- [ ] Mobile friendly (cards strething accordingly across different screens)
- [ ] Pause game
- [ ] Pause audio when page is inactive
- [ ] "Are you sure you want to give up?" popup if trying to close the page mid game

## Technologies used
Below are a list of the programming languages, technologies and frameworks used for this website.

* HTML5
* CSS3
* Vanilla JS
* Visual Studio Code 
    - Live Server Extension
    - Color Picker
    - Markdown Preview
* Git for version control
* Github to store project
* Github pages to deploy project
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
* Windows 7
    - Chrome

### Manual testing
1. Clicking on overlay over the whole page
2. Turning all cards, clicking on all cards fast

I had planned to use Jasmine framework for automated testing but due to time constraints I was not able to. Yet.

### Errors
Current and past errors:

1.  ***NOT YET RESOLVED*** The first error I encountered was with Safari (on all devices) while turning cards. [Click here to see video](https://res.cloudinary.com/www-madine-se/video/upload/v1585779094/fruit_game/safari-error-fruit-game_am8yt1.mov). During the animation of card turning it glitches and half of the other side is visible during animation. I added -webkit- to transform styles but it did not solve the issue.  
2. Resolved. Deployed website on Github pages opened on Safari sometimes lets match not actually matching cards. 
3.  Resolved. Reaching level two, cards duplicate function called twice.
4. Resolved. When failing with time running out, game moves on to the next level. 
5. Fixed. Too many papayas on level 2. 
6. Resolved. Duplicated on level 3 from level 2.
7. ***NOT YET RESOLVED*** On some browsers/devices the game levels do not function properly. Level Up overlay shows up, but no cards are added to the deck. I parsed the local storage items, because that was the issue with Firefox but the problem still exists on mobile Chrome.
8. ***NOT YET RESOLVED*** Levels localStorage does not increment properly on Safari. 

## Deployment
The website was made by creating and new repository in Github, copying [web url](https://github.com/sabinemm/fruit-game.git) and cloned with built in Git control in Visual Studio Code. Git was used for version control and pushed to a repository [hosted](https://sabinemm.github.io/fruit-game/) on Github pages. 

### How to deploy code locally
If you wish to run this code locally: 

* Download or clone the code from the Github 
* Click on "Clone or download" to Download ZIP or clone by copying the link
* Uncompress the ZIP folder to view or clone into VS Code using Source Control and paste the link in "Clone" window


1. Go to my GitHub [repository](https://github.com/sabinemm/fruit-game.git) 

2.  Click on 'Clone or download' under the repository name.

3. Copy the clone URL for the repository in the 'Clone with HTTPs section'.

4. Open terminal in your local IDE.

5. Change the current working directory to the location where you want the cloned directory to be made.

6. Paste this into your console:

```git clone https://github.com/sabinemm/fruit-game.git```

Or type  ```git clone``` and paste copied repository link

7. Press Enter to complete

## Credits
### Code
* HTML and CSS part of the [tutorial](https://www.youtube.com/watch?v=28VfzEiJgy4) 
* Javascript [tutorial](https://www.youtube.com/watch?v=3uuQ3g92oPQ) 
* [StackOverflow](https://stackoverflow.com/questions/60885320/inserts-a-div-and-a-link-into-the-div-twice-and-does-this-with-several-links-js)
* [Maranatha Ilesanmi](https://github.com/mbilesanmi) helping me with setting up local storage for levels 
* My friend Rūta with helping me to put cards in the constructor 
* [OnClick refresh](https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click)
* Several CI student ReadMe files as examples for my project writeup. (First example was no longer available. Here is the [second](https://github.com/hebs87/simon-milestone-project-two/blob/master/README.md).)

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

## Acknowledgements
I was initally tempted to create a Snakes and Ladders game. I had downloaded one version of it on my Ipad and found it to be poorly made. As it would be too difficult for me to create at this point and found a great tutorial by [Web Dev Simplified](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw) for memory game and decided to go with it.

Appreciating my friends Rūta and Agris teaching me how to find and fix errors and giving me hints how to solve problems.

A thanks to my mentor [Maranatha Ilesanmi](https://github.com/mbilesanmi) for helping and guiding me through the process of developing this game. 

[Back to top ↑](#JUICY-FRUIT-MEMORY-GAME)