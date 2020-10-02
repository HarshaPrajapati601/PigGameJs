/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
 1)var rounds
 var player 1, player 2;
 on click of roll the dice- the number is saved to the cureent var;
  if(rollDice >1){
      current var ++;
      if(userClicks on 'Hold'){
        current var  =  Global Score
      }
  }else{
      current var = 0;
      Global Score;
      //the next player turns(controls gets shifted to  2nd player
      bg colour changes)
  }
*/

var scores,roundScore ,activePlayer ,inputRoundScore,diceDom ,gamePlaying,lastDice  ;
var customInput = '100';
resetGame();

//on click of dice
document.querySelector('.btn-roll').addEventListener('click',()=>{
    if(gamePlaying){
   var dice= Math.floor(Math.random()*6)+1; //generate random device number
   diceDom.style.display ='block'; //show roll device
   diceDom.src='dice-' +dice+'.png'; 
        if(dice === 6 && lastDice === 6){
            alert("yes")
            scores[activePlayer] = 0;
            document.getElementById('score-'+activePlayer).textContent = '0';
            nextPlayer();
        }
        else if(dice!==1){
            roundScore=roundScore + dice;   
            document.querySelector('#current-'+activePlayer).textContent = roundScore;

        }
        else{  
       nextPlayer();
        }
        lastDice= dice;
}
})
//on click of hold
document.querySelector('.btn-hold').addEventListener('click',()=>{
    scores[activePlayer]+=roundScore;
    customInput=  document.getElementById('customVal').innerHTML.textContent; 
    document.getElementById('score-'+activePlayer).textContent =  scores[activePlayer];
    if(scores[activePlayer]>=20){
       document.getElementById('name-'+activePlayer).textContent="WINNER !";
       diceDom.style.display ='none';
       roundScore=0; 
       document.querySelector('#current-'+activePlayer).textContent = '0';  
       document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
       document.querySelector('.player-' +activePlayer + '-panel').classList.remove('active');  
       gamePlaying=false;

    }
    else{
        nextPlayer();
    }
    
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0; 
    document.querySelector('#current-0').textContent = '0'; 
    document.querySelector('#current-1').textContent = '0';    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');  
    diceDom.style.display ='none'; 
  
}

function resetGame(){
    scores=[0,0]; //score of 1st and 2nd player
    activePlayer=0;
    roundScore=0 ;
    gamePlaying=true;
    document.querySelector('#current-0').textContent = '0'; 
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#score-0').textContent = '0'; 
    document.querySelector('#score-1').textContent = '0';  
    
     diceDom= document.querySelector('.dice');
    document.querySelector('.dice').style.display ='none'; //on page load dice is hidden
   
    document.getElementById('name-0').textContent ='Player 1';
    document.getElementById('name-1').textContent ='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    
 

}

document.querySelector('.btn-new').addEventListener('click',resetGame);



