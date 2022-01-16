// Popup is closed
let upgradesPopup = document.querySelector('#upgrades-popup');
upgradesPopup.style.opacity = "0";
upgradesPopup.style.width = "0px";
upgradesPopup.style.height = "0px";

// Open the popup
function openUpgrades() {
    upgradesPopup.style.opacity = "1";
upgradesPopup.style.width = "80%";
upgradesPopup.style.height = "80%";
}

// Close the popup
function closeUpgrades() {
    upgradesPopup.style.opacity = "0";
    upgradesPopup.style.width = "0px";
    upgradesPopup.style.height = "0px";
}