    function getMoveName (argMoveId){
       if(argMoveId == 1){
         return 'kamień';
       }
  
       printMessage('Nie znam ruchu o id ' + argMoveId + '.');
       return 'nieznany ruch';
      } 
       if(argMoveId == 2){
         return 'papier';
       }

       printMessage('Nie znam ruchu o id ' + argMoveId + '.');
       return 'nieznany ruch';
    
       if(argMoveId == 3){
         return 'nożyce';
       }

       printMessage('Nie znam ruchu o id ' + argMoveId + '.');
       return 'nieznany ruch';

    function displayResult(argComputerMove, argPlayerMove){
        console.log('moves:', argComputerMove, argPlayerMove);
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
      
        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
          printMessage('Ty wygrywasz!');
        } else {
          printMessage('Tym razem przegrywasz :(');
        }
      }
 
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
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
  let playerMove = getMoveName(randomNumber);
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









