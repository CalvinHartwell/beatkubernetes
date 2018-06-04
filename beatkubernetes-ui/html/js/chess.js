/* beatkubernetes - js */

/* Start Function */
function start() {
  ;(function () {
  function main( tFrame ) {
    MyGame.stopMain = window.requestAnimationFrame( main );
    
    update( tFrame ); //Call your update method. In our case, we give it rAF's timestamp.
    render();
  }
  
    main(); // Start the cycle
  })();
}

/* Restart Function */
function restart() {
	
}
