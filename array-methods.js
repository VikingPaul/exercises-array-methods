var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/* 
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

var el = document.getElementById("planets");
planets.forEach(function(value) {
  el.innerHTML += value + " ";
})

// Use the map method to create a new array where the first letter of each planet is capitalized

var capitalizedPlanets = planets.map(function(str) {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
})

// Use the filter method to create a new array that contains planets with the letter 'e'

var ePlanets = planets.filter(function(value) {
  if (value.indexOf('e') >= 0) {
    return value
  }
})

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function(prev, curr) {
  return prev + " " + curr
})