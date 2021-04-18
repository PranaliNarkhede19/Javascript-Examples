'use strict';
let secretNum = Math.trunc(Math.random()*20) + 1;

let score = 20;
let highscore = 0;
const displayMassage = function(message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click' , function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(!guess);
    
     
    if(!guess){
        displayMassage('no number');
        /*document.querySelector('.message').textContent = "no number";*/
    }else if(guess === secretNum){
        displayMassage('Number is correct');
       /* document.querySelector('.message').textContent = "Number is correct";*/
        document.querySelector('.number').textContent = secretNum;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
         
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }else if(guess !== secretNum){
        if(score > 0){
            displayMassage( guess > secretNum ? "number ias too high" : "number is too low") ;
            /* guess > secretNum ? "number ias too high" : "number is too low";*/
             score--;
             document.querySelector('.score').textContent = score;
        } else{
            displayMassage('you lost the game');
            /*document.querySelector('.message').textContent = "you lost the game";*/
        }
      
    }
    
    
    
    
    /*else if(guess > secretNum){
        if(score > 0){
            document.querySelector('.message').textContent = "Number is too high";
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "You lost the game";
        }  
    }else if (guess < secretNum){
        if(score > 0){
            document.querySelector('.message').textContent = "Number is too low";
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "You lost the game";
        }
        
    }*/
})

document.querySelector('.again').addEventListener('click', function(){
    secretNum = Math.trunc(Math.random()*20) + 1;
    score = 20;
    displayMassage('Start Guessing...');
    // document.querySelector('.message').textContent = "Start Guessing...";
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = "?";
})