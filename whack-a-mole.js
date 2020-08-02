  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// get a random cell
// mole image appears in a random cell
// click on the mole
// mole respawns to another cell

var cells = document.getElementsByTagName("TD")

var randomIndex = Math.floor(Math.random() * cells.length)

var randomCell = cells[randomIndex]

var mole = document.createElement('img');

mole.src = './mole.png'
mole.id = "mole"

randomCell.appendChild(mole);

mole.onclick = whackedMole

function whackedMole() {
  randomIndex = Math.floor(Math.random() * cells.length)
  randomCell = cells[randomIndex]
  randomCell.appendChild(mole);

  var audio = new Audio('./whack-audio.wav');
  audio.play();
}