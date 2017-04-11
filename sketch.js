var yola = [10,9,14,3];
var s = 0;

function setup() {
  createCanvas( 800, 600 );
  background( 159, 118, 193 );

}

function draw() {
  music();
  var x = 0;
  while ( x < width ) {
    fill( 110, 151, 216 );
    rect( x, 300, 30, 30 );
    x = x + 15
  }

  for ( var i = 0; i < 4; i++ ) {
    ellipse( ( i + 1 ) * 100, 200, yola[ i ], yola[ i ] );
  }
}


function music() {
  if ( mouseIsPressed ) {
    fill(178, 51, 51);
    ellipse( mouseX, mouseY, 74, 74 );
    fill(127, 130, 128);
    ellipse( mouseX, mouseY, 50, 50 );
  }

}

