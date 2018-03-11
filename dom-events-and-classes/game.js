// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick', hide)
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE

function makeBlue (evt) {
  evt.target.classList.toggle('blue')
  updateCounts()
}

// CREATE FUNCTION hide HERE

function hide (evt) {
  evt.target.classList.toggle('invisible')
  updateCounts()
}

function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }
  
  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS

  var allDots = document.getElementsByClassName('board')[0].children;

  var allDotsCount = document.getElementById('board')[0].childElementCount;

  for (i = 0; i < allDotsCount; i++) {
    if (element.classList.contains('blue')) {
      totals.blue++;
  }

  /*
  bindEventListeners(document.getElementsByClassName('board')[0].children)

  var childCount = document.getElementById('board')[0].childElementCount;
  
  for (totalsBlue = 0; totalsBlue <= childCount; totalsBlue++) {

    if (element.classList.contains('blue')) {
      totals.blue++;
  }
  for (totalsGreen = 0; totalsGreen <= childCount; totalsGreen++) {

    if (element.classList.contains('green')) {
      totals.green++;
  }

}
*/

  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
