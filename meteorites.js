function incomingMeteorite() {
    // Creating the meteorite
    let meteorite = document.createElement("div");
    meteorite.classList.add('meteorite');
    // Giving it random coordinates
    let randomCoordinateX = Math.round(Math.random()*1000 + 1000)*(Math.random() < 0.5 ? -1 : 1);
    let randomCoordinateY = Math.round(Math.random()*1000 + 1000)*(Math.random() < 0.5 ? -1 : 1);
    let randomTransform = "translate(" + randomCoordinateX + "px," + randomCoordinateY + "px)";
    meteorite.style.transform = randomTransform;
    // Appending it to make it appear
    document.querySelector('#center').append(meteorite);

    // After 0.5s meteorite starts to fly towards the planet
    setTimeout(function() {
       meteorite.style.transform = "translate(0,150px)"
    }, 500);
    // Adding space material on impact
    // (Now it's done just by timing, in the future it should be collision detection)
    setTimeout(function() {
        addSpaceMaterial();
    }, 5300);
    // Removing the meteorite when it's hidden
    setTimeout(function() {
        meteorite.remove();
    }, 6000);
}

// Setting the amount of meteorites per minute
let meteoritesPerMinute = 60;
let meteoriteSpeed = 1000;

// Function for increse the number of meteorites per minute
function addMeteorites() {
    meteoritesPerMinute++;
    document.querySelector('#meteorites-per-minute').innerText = "Meteorites per minute: " + meteoritesPerMinute;
    // ⬇⬇⬇⬇⬇⬇⬇⬇ THIS SHIT AINT WORKIN. Meteorite speed is still 1000. ⬇⬇⬇⬇⬇⬇⬇⬇
    meteoriteSpeed = 60000/meteoritesPerMinute;
    console.log(meteoriteSpeed)
    // ⬆⬆⬆⬆⬆⬆⬆⬆ THIS SHIT AINT WORKIN. Meteorite speed is still 1000. ⬆⬆⬆⬆⬆⬆⬆⬆
}

// Sending the meteorite every set time
setInterval(function() {
    incomingMeteorite()
}, meteoriteSpeed);

