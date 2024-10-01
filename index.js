let aura = 0;
const targetAura = 1000;

const imageSources = [
    "images/Batman.webp",    // A+++
    "images/Jonkler.webp",   // A
    "images/thomas.webp",    // A++
    "images/gojo.webp",      // B+
    "images/hawk tuah.webp", // B
    "images/aizen.webp",     // A-
    "images/guts.webp",      // A
    "images/sukuna.webp",    // A--
    "images/goku.webp",      // A++++
    "images/yujiro.webp",    // S
    "images/drive.webp",     // S-
    "images/dio.webp",       // S--
    "images/aang.webp",      // A---
    "images/Darth.webp",     // S+
    "images/Madara.webp",    // S++
    "images/kratos.png",     // SSS+++++++
    "images/saitama.webp",   // SSSSSS+++++++++
    "images/vegeta.webp"     // A+
];

const characterValues = {
    "Batman": 8,   // A+++
    "Jonkler": 7,  // A
    "Thomas": 8,   // A++
    "Gojo": 4,     // B+
    "Hawk Tuah": 3, // B
    "Aizen": 6,    // A-
    "Guts": 7,     // A
    "Sukuna": 5,   // A--
    "Goku": 9,     // A++++
    "Yujiro": 10,  // S
    "Drive": 9,    // S-
    "Dio": 8,      // S--
    "Aang": 4,     // A---
    "Darth": 9,    // S+
    "Madara": 10,  // S++
    "Kratos": 15,  // SSS+++++++
    "Saitama": 20, // SSSSSS+++++++++
    "Vegeta": 8    // A+
};

const imageCharacterMap = {
    "images/Batman.webp": "Batman",
    "images/Jonkler.webp": "Jonkler",
    "images/thomas.webp": "Thomas",
    "images/gojo.webp": "Gojo",
    "images/hawk tuah.webp": "Hawk Tuah",
    "images/aizen.webp": "Aizen",
    "images/guts.webp": "Guts",
    "images/sukuna.webp": "Sukuna",
    "images/goku.webp": "Goku",
    "images/yujiro.webp": "Yujiro",
    "images/drive.webp": "Drive",
    "images/dio.webp": "Dio",
    "images/aang.webp": "Aang",
    "images/Darth.webp": "Darth",
    "images/Madara.webp": "Madara",
    "images/kratos.png": "Kratos",
    "images/saitama.webp": "Saitama",
    "images/vegeta.webp": "Vegeta"
};

const backgroundImages = {
    calm: "wallpaper/calmAura.png",         // 0-250 aura
    moderate: "wallpaper/wukongAura.jpg",   // 251-500 aura
    intense: "wallpaper/berserkAura.jpg",   // 501-700 aura
    extreme: "wallpaper/darkAura.jpg",      // 701-999 aura
    win: "wallpaper/cosmicaura.jpg"         // 1000 aura
};

// Variables to store the aura values of the currently displayed images
let currentLeftAura = 0;
let currentRightAura = 0;

// Function to load random images and store aura values
function loadRandomImages() {
    let leftIndex = Math.floor(Math.random() * imageSources.length);
    let rightIndex;

    do {
        rightIndex = Math.floor(Math.random() * imageSources.length);
    } while (rightIndex === leftIndex); // Ensure the images are different

    // Set the images for the left and right
    document.getElementById("left-image").src = imageSources[leftIndex];
    document.getElementById("right-image").src = imageSources[rightIndex];

    // Get characters' names from the image paths
    const leftCharacter = imageCharacterMap[imageSources[leftIndex]];
    const rightCharacter = imageCharacterMap[imageSources[rightIndex]];

    // Store the aura values of the displayed characters
    currentLeftAura = characterValues[leftCharacter];
    currentRightAura = characterValues[rightCharacter];
}

// Function to update the aura score and check win/loss
function updateAura(change) {
    aura += change;
    document.getElementById("aura").innerText = aura;

    updateBackground();

    if (aura >= targetAura) {
        alert("Congratulations! You won with 1000 aura!");
        resetGame();
    } else if (aura < 0) {
        alert("You lost! You are going to the Aura Prison!");
        resetGame();
    }
}

// Function to update the background based on aura value
function updateBackground() {
    if (aura >= 0 && aura <= 250) {
        document.body.style.backgroundImage = `url(${backgroundImages.calm})`;
    } else if (aura >= 251 && aura <= 500) {
        document.body.style.backgroundImage = `url(${backgroundImages.moderate})`;
    } else if (aura >= 501 && aura <= 700) {
        document.body.style.backgroundImage = `url(${backgroundImages.intense})`;
    } else if (aura >= 701 && aura <= 999) {
        document.body.style.backgroundImage = `url(${backgroundImages.extreme})`;
    } else if (aura >= 1000) {
        document.body.style.backgroundImage = `url(${backgroundImages.win})`;
    }
}

// Function to reset the game state
function resetGame() {
    aura = 0;
    document.getElementById("aura").innerText = aura;
    updateBackground();  // Reset wallpaper to calm
    loadRandomImages();   // Load new random images
}

// Event listener for "Higher" button
document.getElementById("higher-button").addEventListener("click", function () {
    // Compare the currently displayed images' aura
    if (currentLeftAura > currentRightAura) {
        updateAura(100); // Correct guess
    } else {
        updateAura(-50); // Wrong guess
    }
    loadRandomImages(); // Load new images after each guess
});

// Event listener for "Lower" button
document.getElementById("lower-button").addEventListener("click", function () {
    // Compare the currently displayed images' aura
    if (currentRightAura > currentLeftAura) {
        updateAura(100); // Correct guess
    } else {
        updateAura(-50); // Wrong guess
    }
    loadRandomImages(); // Load new images after each guess
});

// Initialize the first random images and background
loadRandomImages();
updateBackground();
