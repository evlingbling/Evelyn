/* .js files add interaction to your website */
/*
KEY FEATURE: Personalize it
https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
*/

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
//Will need to explain that sometimes the DOM doesn't load all the way, so the browser can't find the element for JavaScript to use

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the script.
Be sure to update function names.
*/

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am calling to ask you to support your action to save the Earth from climate chang. For example, " + learning + ". Please support saving Earth from climate change today.";
}


//Move these variables to the top
var factList = [
  "Fossil fuel is running out in 47 years", 
  "Biomass can be an effective alternative for fossil fuel", 
  "Biomass includes but are not limited to animal sewage, crops, animal fat, woods", 
  "Biomass can be converted into renewable energy by gasification, anaerobic decomposition..", 
  "Wind, Sun, Water can also be an effective renewable energy source", 
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}

