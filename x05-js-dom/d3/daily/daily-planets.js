// Planets
// In this exercise we will be creating a webpage with a black background as the solar system and we will fill the solar system with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).


const planets = [
    "Mercury", 
    "Venus", 
    "Earth", 
    "Mars", 
    "Jupiter", 
    "Saturn", 
    "Uranus", 
    "Neptune"
];

const planetColors = [
    "#a9a9a9", // Mercury
    "#deb887", // Venus
    "#1e90ff", // Earth
    "#ff4500", // Mars 
    "#d2b48c", // Jupiter
    "#daa520", // Saturn 
    "#4682b4", // Uranus 
    "#00008b"  // Neptune
];

const solarSystem = document.getElementById("solar-system");

planets.forEach((planet, index) => {
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = planetColors[index];
    solarSystem.appendChild(planetDiv);
});
