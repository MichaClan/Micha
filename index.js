let aura = 0;
const targetAura = 1000;

const imageSources = [
    "images/Batman.webp",
    "images/Jonkler.webp",
    "images/thomas.webp",
    "images/gojo.webp",
    "images/hawk tuah.webp",
    "images/aizen.webp",
    "images/guts.webp",
    "images/sukuna.webp",
    "images/goku.webp",      
    "images/yujiro.webp",
    "images/drive.webp",
    "images/dio.webp",
    "images/aang.webp",
    "images/Darth.webp",
    "images/Madara.webp",
    "images/kratos.png",
    "images/saitama.webp",
    "images/vegeta.webp"    // Voor nu:  Aura ranking: Batman > Kratos > Madara >  > Thomas > Goku>> Vegeta > Saitama > Dio> Sukuna > Gojo > Aang >> Hawk Tuah
    // add shanks and luffy
];

const backgroundImages = {
    calm: "wallpaper/calmAura.png",         // 0-250 aura
    moderate: "wallpaper/wukongAura.jpg",   // 251-500 aura
    intense: "wallpaper/berserkAura.jpg",   // 501-700 aura
    extreme: "wallpaper/darkAura.jpg",      // 701-999 aura
    win: "wallpaper/cosmicaura.jpg"         // 1000 aura  // werkt nog nie
};

// Function to get a random aura value between 1 and 100
function getRandomAura() {
    return Math.floor(Math.random() * 100) + 1;
}

// Functie dat 2 random foto's genereerd
function loadRandomImages() {
    let leftIndex = Math.floor(Math.random() * imageSources.length);
    let rightIndex;

    do {
        rightIndex = Math.floor(Math.random() * imageSources.length);
    } while (rightIndex === leftIndex); //Maakt zeker dat de rechter foto anders is

    // Zet de foto's
    document.getElementById("left-image").src = imageSources[leftIndex];
    document.getElementById("right-image").src = imageSources[rightIndex];

    // Return the aura values for comparison
    const leftAura = getRandomAura();
    const rightAura = getRandomAura();

    return { leftAura, rightAura };
}

// Function to update the aura score and change the background based on aura
function updateAura(change) {
    aura += change;
    document.getElementById("aura").innerText = aura;

    updateBackground(); // Call this to update background based on aura

    if (aura >= targetAura) {
        alert("Congratulations! You won with 1000 aura!");
        resetGame();
    } else if (aura < 0) {
        alert("You lost! You are going to the Aura Prison! ");
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

// Reset de game in origneel staat
function resetGame() {
    aura = 0;
    document.getElementById("aura").innerText = aura;
    updateBackground();  // Reset wallpaper naar calm
    loadRandomImages();   // Load nieuwe random images
}

// Event listener for "Higher" button
document.getElementById("higher-button").addEventListener("click", function() {
    const { leftAura, rightAura } = loadRandomImages();
    if (leftAura > rightAura) {
        updateAura(100);
    } else {
        updateAura(-50);
    }
});

// Event listener for "Lower" button
document.getElementById("lower-button").addEventListener("click", function() {
    const { leftAura, rightAura } = loadRandomImages();
    if (rightAura > leftAura) {
        updateAura(100);
    } else {
        updateAura(-50);
    }
});

// Initialize the first random images and background
loadRandomImages();
updateBackground(); // Make sure the background starts correctly
