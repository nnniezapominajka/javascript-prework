  //var argButtonName, buttonPaper, buttonRock, buttonScissors;
 //kliknięcie przycisków
  function buttonClicked(argButtonName) {
     clearMessages();
     console.log(argButtonName + 'został kliknięty');
  }
        playGame(3);

 // var argMoveId, argPlayerMove, argComputerMove, ComputerMove, playerMove, randomNumber, playerInput;

  //ruch gracza
  playerMove = argButtonName;
  console.log('ruch gracza to:' + PlayerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1 );
  console.log('wylosowana liczba to:' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to:' + computerMove);
  displayResult(playerMove, computerMove);


  //ruch komputera - przypisanie ruchu do wylosowanej liczby
  function getMoveName (argMoveId) {
      console.log (`Wywołano funkcję getMoveName z argumentem: ' + argMoveId`);
      if(argMoveId == 1) {
        return 'kamień';
      } else if (argMoveId == 2) {
        return 'papier';
      } else if (argMoveId == 3) {
        return 'nożyce';
      } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o kamień.');
        return 'kamień';
      }
  }
  //wariant wyniku
  function displayResult(argPlayerMove, argComputerMove) {
      console.log ('wywołano funkcję displayResult z argumentami: ' + argPlayerMove + ',' + argComputerMove);
      if(argPlayerMove == 'papier' && argComputerMove == 'kamień') {
         printMessage('Ty wygrywasz');
      } else if (argPlayerMove =='kamień' && argComputerMove =='nożyce') {
         printMessage('Ty wygrywasz');
      } else if (argPlayerMove == 'nożyce' && argComputerMove =='papier') {
         printMessage('Ty wygrywasz');
      } else if (argPlayerMove == argComputerMove) {
         printMessage('Remis');
      } else {
         printMessage('Przegrywasz :(');
      }
      printMessage('Zagrałem' + argComputerMove + ',a Ty' + argPlayerMove);
    }
    buttonRock = document.getElementById('button-rock');
    buttonRock.addEventListener('click',function(){ buttonClicked(kamień);});
    buttonPaper = document.getElementById('button-paper')
    buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
    buttonScissors = document.getElementById('button-scissors');
    buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

//let randomNumber = Math.floor(Math.random() * 3 + 1);
//console.log('Wylosowana liczba to: ' + randomNumber);

//let computerMove = getMoveName(randomNumber);
//let playerInput = getMoveName(randomNumber);
//let playerMove = getMoveName(randomNumber);

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









