// Configurarea ratelor de producție (Sezonul 1)
const ECON_CONFIG = {
    uranium_rate: 10, // Unități pe minut per buncăr în Australia
    oil_rate: 25,     // Unități pe minut per platformă petrolieră
    update_interval: 60000 // Actualizare la fiecare 60 secunde
};

let playerResources = {
    uranium: 100, // Start bonus
    oil: 500,
    credits: 1000
};

// Funcția de generare resurse
function generateResources() {
    // Calculăm câte baze deține jucătorul (presupunem că avem un array 'ownedBases')
    const activeBases = getOwnedBasesCount(); 
    
    if (activeBases > 0) {
        playerResources.uranium += activeBases * ECON_CONFIG.uranium_rate;
        playerResources.oil += activeBases * ECON_CONFIG.oil_rate;
        
        console.log(Resurse actualizate: Uraniu: ${playerResources.uranium}, Petrol: ${playerResources.oil});
        updateUI(); // Trimitem datele către interfață
    }
}

// Pornim motorul economic
setInterval(generateResources, ECON_CONFIG.update_interval);

function updateUI() {
    // Aici facem legătura cu elementele HTML de pe hartă
    document.getElementById('uranium-display').innerText = playerResources.uranium;
    document.getElementById('oil-display').innerText = playerResources.oil;
}
