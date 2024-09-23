let aura = 0;
const targetAura = 1000;
const imageSources = [   // Hier onder komen foto's
    "images/Batman.webp",
    "images/Jonkler.webp",
    "images/thomas.webp",
    "images/gojo.webp",
    "images/name-another-anime-character-with-more-aura-than-them-v0-camyvkciog.webp", 
    "images/hawk tuah.webp",
    "image3.jpg",
    "image3.jpg",
    ]; 

    const backgroundImages = {    //achtergrond die verandert
        calm: "images/calmAura.png",     // 0-250 aura
        moderate: "images/wukongAura.jpg", // 251-500 aura
        intense: "images/berserkAura.jpg",   // 501-700 aura
        extreme: "images/darkAura.jpg",   // 701-999 aura
        win: "images/cosmicaura.jpg"        // 1000 aura
    };

function getRandomAura() {
    return Math.floor(Math.random() * 100) + 1; // Random aura between 1 and 100
}

function loadRandomImages() {
    const leftAura = getRandomAura();
    const rightAura = getRandomAura();

    document.getElementById("left-image").src = imageSources[Math.floor(Math.random() * imageSources.length)];
    document.getElementById("right-image").src = imageSources[Math.floor(Math.random() * imageSources.length)];

    return { leftAura, rightAura };
}

function updateAura(change) {
    aura += change;
    document.getElementById("aura").innerText = aura;

    if (aura >= targetAura) {
        alert("Congratulations! You won with 1000 aura!");
        resetGame();
    } else if (aura < 0) {
        alert("You lost! Try again.");
        resetGame();
    }
}

function resetGame() {
    aura = 0;
    document.getElementById("aura").innerText = aura;
    loadRandomImages();
}

document.getElementById("higher-button").addEventListener("click", function() {
    const { leftAura, rightAura } = loadRandomImages();
    if (leftAura > rightAura) {
        updateAura(100);
    } else {
        updateAura(-50);
    }
});

document.getElementById("lower-button").addEventListener("click", function() {
    const { leftAura, rightAura } = loadRandomImages();
    if (rightAura > leftAura) {
        updateAura(100);
    } else {
        updateAura(-50);
    }
});

// Initialize the first random images
loadRandomImages();
updateBackground()