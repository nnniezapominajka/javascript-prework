{
  const spanWin = document.getElementById("win");
  const spanLose = document.getElementById("lose");

  let win = 0;
  let lose = 0;

  const playGame = function (playerInput) {
    // console.log(argButtonName + 'Wywołano funkcję playGame' + playerInput);
     clearMessages();
  const printMessage = function (msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    document.getElementById("messages").appendChild(div);
  }
  const getMoveName = function(argMoveId) {
    //console.log('Wywołano funkcję getMoveName z argumentem:' + argMoveId);
     if(argMoveId == 1) {
        return 'kamień';
    } else if argMoveId == 2) {
        return 'papier';
    } else if argMoveId == 3) {
       return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
       return'nieznany ruch';
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  //console.log('Wylosowana liczba to:' + randomNumber);
  const computerMove = getMoveName(randomNumber);
  //playerMove = playerInput;
  //displayResult(computerMove, playerMove);

  printMessage("Mój ruch to:" + computerMove);

  const playerMove = getMoveName(argPlayerInput);
  printMessage("Twój ruch to:" +playerMove);

  const displayResult = function(argPlayerMove, argComputerMove) {
      //console.log ('wywołano funkcję displayResult z argumentami: ' + argPlayerMove + ',' + argComputerMove);
      printMessage('Zagrałem' + argComputerMove + ', a Ty' + argPlayerMove);
      if(playerMove == 'papier' && computerMove == 'kamień') {
        win++;
        printMessage('Ty wygrywasz');
      } else if (playerMove =='kamień' && computerMove =='nożyce') {
        win++;
        printMessage('Ty wygrywasz');
      } else if (playerMove == 'nożyce' && computerMove =='papier') {
        win++;
        printMessage('Ty wygrywasz');
      } else if (playerMove == computerMove) {
        printMessage('Remis');
      } else {
        lose++;
        printMessage('Przegrywasz...');
      }


      spanWin.textContent = "" + win;
      spanLose.textContent = "" + lose;
    }

    displayResult(computerMove, playerMove);
  }

document.getElementById("play-rock").addEventListener("click", function() {
  playGame(1);
});
document.getElementById("play-paper").addEventListener("click", function() {
  playGame(2);
});
document.getElementById("play-scissors").addEventListener('click', function() {
  playGame(3);
});
  }
}
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









