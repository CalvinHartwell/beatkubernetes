/* beatkubernetes - js */

/* global vars */
currentGo="player"
selectedPosition=""
WHITE_CHESS_KING="&#9812;"
WHITE_CHESS_QUEEN="&#9813;"
WHITE_CHESS_ROOK="&#9814;"
WHITE_CHESSS_BISHOP="&#9815;"
WHITE_CHESS_KNIGHT="&#9816;"
WHITE_CHESS_PAWN="&#9817;"
BLACK_CHESS_KING="&#9818;"
BLACK_CHESS_QUEEN="&#9819;"
BLACK_CHESS_ROOK="&#9820;"
BLACK_CHESS_BISHOP="&#9821;"
BLACK_CHESS_KNIGHT="&#9822;"
BLACK_CHESS_PAWN="&#9823;"

/* Start Function */
function start() {
  ;(function () {
  function main( tFrame ) {
    MyGame.stopMain = window.requestAnimationFrame( main );    
    update();
    render();
  }
  
    main(); // Start the cycle
  })();
}

function update(position) {
  if(currentGo=="player") 
  {
    if(selectedPosition=="")
    {
      selectedPosition=position
    }
    else
    {
      if(selectedPosition != position) {
      document.getElementById(selectedPosition).value=document.getElementById(position).value
      document.getElementById(selectedPosition).value=""
      selectedPosition=""
      }
    }
  }
  else
  {
  }
}

/* Restart Function */
function restart() {
   alert("Are you sure you want to reset the game?");	
}
