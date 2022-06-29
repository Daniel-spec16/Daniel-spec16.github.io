const projectEyes = document.getElementById("Eyes");
const projectPacman = document.getElementById("PacMan");
const projectBus = document.getElementById("BusStops");

const descriptionEyes = "";
const descriptionBus = "Bla Bla Bus";
const descriptionPacman = "PacMan project is a web page, with Pacmen moving randomly on the screen, while changing animations. It is powered by javascript. Animation concept is having 2*2 two-dimensional pictures array switching between its element with setInterval function.";


projectEyes.addEventListener("mouseover", (event) => {
   
    var description = document.getElementById("description");
    // document.body.appendChild("<div>" + descriptionEyes + "</div>");
    description.innerHTML = descriptionEyes;
    
})

projectBus.addEventListener("mouseover", (event) => {
   
    var description = document.getElementById("description");
    // document.body.appendChild("<div>" + descriptionEyes + "</div>");
    description.innerHTML = descriptionBus;
    
})

projectPacman.addEventListener("mouseover", (event) => {
   
    var description = document.getElementById("description");
    // document.body.appendChild("<div>" + descriptionEyes + "</div>");
    description.innerHTML = descriptionPacman;
    
})
    




