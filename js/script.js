
/*Kliknięcie przycisku*/  
  function playGame(playerInput) {
     console.log ('Wywołano funkcję playGame'+ playerInput);  
        clearMessages();    
  }
         playGame(3)


  buttonTest = document.getElementById('button-test');
  buttonTest.addEventListener('click', function(){ buttonClicked('guzik TEST'); });
  buttonRock = document.getElementById('button-rock');
  buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
  buttonPaper = document.getElementById('button-paper');
  buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
  ButtonScissors = document.getElementById('button-scissors');
  ButtonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
      
  var argMoveId, argComputerMove, argComputerMove, playerInput;

    
  /*Ruch gracza*/
  function getMoveName (argComputerMoveId) { 
      console.log (`Wywołano funkcję getMoveName z argumentem: + argMoveId`);
      if(argMoveId == 1) {
        return 'kamień';
      } else if (argMoveId == 2) {
        return 'papier';
      } else if (argMoveId == 3) {
        return 'nożyce';
      } else {
          printMessage('Nie znam ruchu o id ' + argMoveId + ',');
          return 'nieznany ruch';
      } 
    }    

  function displayResult(argPlayerMove, argComputerMove) {
      console.log ('argumenty:'+ argPlayerMove + ',' + argComputerMove);
      printMessage('Zagrałem' + argComputerMove + ', a Ty' + argPlayerMove);

      if(argPlayerMove == 'papier' && argComputerMove == 'kamień') {
         printMessage('Ty wygrywasz');
      } else if (argPlayerMove =='kamień' && argComputerMove =='nożyce') {
         printMessage('Ty wygrywasz');
      } else if (argComputerMove == 'nożyce' && argComputerMove =='papier') {
         printMessage('Ty wygrywasz');
      } else if (argPlayerMove == argComputerMove) {
         printMessage('Remis');
      } else {
         printMessage('Przegrywasz...');
      }
    }       
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
let playerInput = getMoveName(randomNumber);
let playerMove = getMoveName(randomNumber);

/*
if(randomNumber == 1){
  computerMove = 'kamień';
}else if(randomNumber == 2){
   computerMove = 'papier'; 
}else if (randomNumber == 3){
   computerMove = 'nożyce'; 
} 

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);
*/
 /* let playerMove = getMoveName(randomNumber);*/
/*
if(playerInput == '1'){
  playerMove = 'kamień';
}else if (playerInput == '2') {
  playerMove = 'papier'; 
}else if (playerInput == '3') {
  playerMove = 'nożyce'; 
}

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
}else if (computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');  
}else if (computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');  
}else if (computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');  
}else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!'); 
}else if (computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');     
}else if (computerMove == 'kamień' && playerMove == 'nieznany ruch'){
    printMessage('Brak wyniku!');  
}else if (computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
    printMessage('Brak wyniku!'); 
}else if (computerMove == 'papier' && playerMove == 'nieznany ruch'){
    printMessage('Brak wyniku!'); 
}     
*/








  
