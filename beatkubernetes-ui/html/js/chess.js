/* beatkubernetes - js */

/* global vars */
currentGo="player"
selectedPosition=""
WHITE_CHESS_KING="&#9812;"
WHITE_CHESS_QUEEN="&#9813;"
WHITE_CHESS_ROOK="&#9814;"
WHITE_CHESS_BISHOP="&#9815;"
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
  /* Check if player turn */
  if(currentGo=="player") 
  {
    selectedPositionValue=document.getElementById(position).innerHTML
    /* Player has selected a piece to move */ 
    if(selectedPosition=="")
    {
       /* Make sure player selects a black piece, not white. */
       if( selectedPositionValue != WHITE_CHESS_ROOK &&
           selectedPositionValue != WHITE_CHESS_PAWN &&
           selectedPositionValue != WHITE_CHESS_QUEEN && 
           selectedPositionValue != WHITE_CHESS_KING &&
           selectedPositionValue != WHITE_CHESS_KNIGHT && 
           selectedPositionValue != WHITE_CHESS_BISHOP )
       { selectedPosition=position }
       else {
         alert("AI controls the white pieces, please select a black piece.")
       } 
    }
    else
    {
      if(selectedPosition != position) {
      
      /* Test if Check Mate */
      /* Highlight selected position when clicked */
      /* Check that movement is valid */
        /* Test that king movement is valid (before/after knighting) */
        if(selectedPositionValue == BLACK_CHESS_KING) 
        { } 
        /* Test that queen movement is valid */
        else if (selectedPositionValue == BLACK_CHESS_QUEEN) 
        { }  
        /* Test that rook movement is valid */
        else if (selectedPositionValue == BLACK_CHESS_ROOK)
        { }
        /* Test that pawn movement is valid */
        else if (selectedPositionValue == BLACK_CHESS_PAWN)
        { }
        /* Test that knight movement is valid */
        else if (selectedPositionValue == BLACK_CHESS_KNIGHT)
        { }
        /* Test that bishoop movement is valid */
        else if (selectedPositionValue == BLACK_CHESS_BISHOP)
        { }

      /* Take and Remove Piece  */ 
      document.getElementById(position).innerHTML=document.getElementById(selectedPosition).innerHTML
      document.getElementById(selectedPosition).innerHTML=""
      selectedPosition=""
      }
    }
  }
  else
  {
     /* If it is AI turn, convert board to FEM format */
     /* Convert back to board format and display changes  */ 
  }
}

/* Use this to check Positions */
function debug(positionA, positionB) {
   alert(positionA)
   alert(positionB)
   alert(document.getElementById(positionA).innerHTML)
   alert(document.getElementById(positionB).innerHTML)
}

/* Converts board to FEM format for AI to process  */
function boardToFEM(chessBoard) {
}

/* Converts FEM format back to board for player to see */
function FEMToBoard(chessBoard) {
}

/* */
function render() {
}

/* Restart Function */
function restart() {
   alert("Are you sure you want to reset the game?");	
}
