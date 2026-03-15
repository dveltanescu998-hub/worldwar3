/**
 * WORLD WAR 3 - COLLISION DETECTOR
 * Calculează interacțiunea dintre unități pe axele X/Y
 */

const CollisionSystem = {
    // Verifică dacă două unități se ating
    checkOverlap: function(unitA, unitB, minDistance = 30) {
        const dx = parseFloat(unitA.style.left) - parseFloat(unitB.style.left);
        const dy = parseFloat(unitA.style.top) - parseFloat(unitB.style.top);
        
        // Teorema lui Pitagora: a² + b² = c²
        const distance = Math.sqrt(dx * dx + dy * dy);

        return distance < minDistance;
    },

    // Detectează toate coliziunile de pe hartă
    scanMap: function() {
        const units = document.querySelectorAll('.unit-icon');
        units.forEach((unitA, i) => {
            for (let j = i + 1; j < units.length; j++) {
                const unitB = units[j];
                
                if (this.checkOverlap(unitA, unitB)) {
                    this.handleEncounter(unitA, unitB);
                }
            }
        });
    },

    // Logica de interacțiune
    handleEncounter: function(a, b) {
        const isEnemy = !a.classList.contains(b.classList[1]); // Verifică dacă au facțiuni diferite
        
        if (isEnemy) {
            console.warn("⚠️ CONTACT INAMIC DETECTAT! Inițiez protocol de luptă.");
            a.style.animation = "pulse-red 0.5s infinite";
            b.style.animation = "pulse-red 0.5s infinite";
        }
    }
};

// Exportă pentru a fi folosit în main logic
// export default CollisionSystem;
