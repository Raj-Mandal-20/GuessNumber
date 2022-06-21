/* alert('This is a sample Project');
 */
'use strict';
let num = document.querySelector('.num');
let game_title = document.querySelector('.game_title');
let content = document.querySelector('.content');
let message = document.querySelector('.message');
let check = document.querySelector('.check');
let highScore = document.querySelector('.high_Score');
let live = document.querySelector('.live');
live.value = 10;
const guess = Math.trunc(Math.random(0) * 20 + 1);
console.log(num.value, message, guess, highScore);
check.addEventListener('click', () => {
    if (live.value == 0) {
        live.textContent = "Game Over! 🏸";
    }
    if (!num.value) {
        message.textContent = "No Number📢";

    }
    else{
        if (num.value > guess) {
            message.textContent = "Too High 📈";
            content.style.backgroundColor= "red";
        } else if (num.value < guess) {
            message.textContent = "Too Low 📉";
            content.style.backgroundColor= "blue";
        } else {
            message.textContent = "Correct 🎉";
            content.style.backgroundColor= "#60b347";
            game_title.style.color= "black";
            highScore.textContent = "High Score : "+ live.value;
        }
        if (live.value > 0) {
            live.textContent = "🛹Score  : " + --live.value;
    
        }
    
    } 

});