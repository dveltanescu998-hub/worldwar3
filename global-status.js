// Logica pentru procente control mondial
let worldControl = {
    zenith: 45, // % din suprafață
    khaos: 40,  // % din suprafață
    neutral: 15
};

function updateWorldDominance(faction, areaCaptured) {
    // Calculăm impactul cuceririi asupra hărții mondiale
    if(faction === 'ZENITH') {
        worldControl.zenith += areaCaptured;
        worldControl.khaos -= areaCaptured;
    } else {
        worldControl.khaos += areaCaptured;
        worldControl.zenith -= areaCaptured;
    }
    renderLeaderboard();
}
