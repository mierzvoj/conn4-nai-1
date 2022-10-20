# conn4-nai-1

## Łukasz Cettler (s20168) oraz Wojciech Mierzejewski (s21617) - grupa 74C

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About The Project](#about-the-project)
* [Features](#features)
* [Technologies Used](#technologies-used)

<!-- ABOUT THE PROJECT -->
## About The Project

Connect Four is a two-player connection board game, in which the players choose a color and then take turns dropping colored tokens into a seven-column, six-row vertically suspended grid. 
The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own tokens. 
Connect Four is a solved game ( a game whose outcome can be correctly predicted from any position). The first player can always win by playing the right moves.

![alt text](https://github.com/mierzvoj/conn4-nai-1/blob/main/c4_example.gif)

## Features
   - Implemented Minimax recursive algorithm function.
   - We used 5p.js graphics library to provide easy game grid render and simple UI.
   - We used evaluation table that indicates possible combinations of four tiles connected, depending on the position on the gameboard starting point.
   - JS alerts that announce the winner.

## Technologies Used

* JavaScript
* HTML
* CSS
* 5p.js library
