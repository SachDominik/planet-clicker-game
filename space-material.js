// Creating the space material variable
let spaceMaterialCounter = document.querySelector('#space-material');
let spaceMaterial = 0;

// Fetching the space material count from local storage if there already is one
if(localStorage.spaceMaterial) {
    spaceMaterial = localStorage.spaceMaterial;
}

// Displaying the space material count
spaceMaterialCounter.innerText = "Space material: " + spaceMaterial;

// Function for adding the space material
function addSpaceMaterial() {
    // Add
    spaceMaterial++;
    // Save to local storage
    localStorage.spaceMaterial = spaceMaterial;
    // Displaying it
    spaceMaterialCounter.innerText = "Space material: " + spaceMaterial;
    // Creating the "+1" animation
    let plusPoint = document.createElement("div");
    plusPoint.innerText = "+1";
    plusPoint.classList.add('plus-point');
    document.querySelector('#center').append(plusPoint);
    // Hiding the "+1"
    setTimeout(function() {
        plusPoint.classList.add('plus-point-hide');
     }, 100);
    // Removing the "+1" compltely
     setTimeout(function() {
        plusPoint.remove()
     }, 2000);
}

// Adding space material after the planet is clicked
document.querySelector('#planet').addEventListener('click', addSpaceMaterial);
