/**
 * WORLD WAR 3 - COLLISION DETECTOR (V2.0 Corectată)
 * Calculează interacțiunea dintre unități pe axele X/Y
 */

const CollisionSystem = {
    // Verifică dacă două unități se ating (Raza de detecție)
    checkOverlap: function(unitA, unitB, minDistance = 35) {
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

    // Logica de interacțiune (REPARATĂ: Verificare sigură a facțiunii)
    handleEncounter: function(a, b) {
        // Preluăm facțiunile din atributele de date (mai sigur decât classList)
        const factionA = a.getAttribute('data-faction');
        const factionB = b.getAttribute('data-faction');
        
        const isEnemy = factionA !== factionB && factionA !== null && factionB !== null;

        if (isEnemy) {
            console.warn("⚠️ CONTACT INAMIC DETECTAT! Inițiez protocol de luptă.");
            
            // Aplicăm efectul vizual de alertă (din efecte-vizuale.css)
            a.style.animation = "pulse-red 0.5s infinite";
            b.style.animation = "pulse-red 0.5s infinite";
            
            // Aici legăm cu SoundLibrary pentru a declanșa semnalul tactic
            if (window.SoundLibrary) {
                window.SoundLibrary.triggerActionCue("Alpha");
            }
        }
    }
};

// Export pentru motorul principal
window.CollisionSystem = CollisionSystem;
console.log("CollisionSystem INTELIGENS: Activat și securizat.");
