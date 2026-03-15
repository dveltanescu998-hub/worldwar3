/**
 * WORLD WAR 3 - UI CONTROLLER
 * Renderizarea misiunilor cu precizie de 100%
 */

async function loadMissions() {
    try {
        // Citim fișierul JSON corectat anterior
        const response = await fetch('misiuni.json');
        const data = await response.json();
        const missionContainer = document.getElementById('mission-list');

        // Curățăm containerul înainte de render
        missionContainer.innerHTML = '';

        data.misiuni_active.forEach(mission => {
            // Creăm cardul de misiune
            const card = document.createElement('div');
            card.className = mission-card ${mission.status};
            
            // Calculăm eficiența bazată pe metricele globale (0.90)
            const efficiency = data.global_metrics.shield_efficiency * 100;

            card.innerHTML = 
                <div class="mission-header">
                    <h3>${mission.nume}</h3>
                    <span class="efficiency-tag">${efficiency}% Precision</span>
                </div>
                <p>${mission.descriere}</p>
                <div class="rewards">
                    <span>❤️ +${mission.recompense.hp_unitati} HP</span>
                    <span>🛡️ +${mission.recompense.scut_bits} Bits</span>
                </div>
                <button onclick="startMission('${mission.id}', ${mission.cerinte.durata_secunde})" 
                        ${mission.status === 'locked' ? 'disabled' : ''}>
                    ${mission.status === 'locked' ? 'BLOCAT' : 'START MISIUNE'}
                </button>
            ;
            
            missionContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Eroare la încărcarea misiunilor de precizie:", error);
    }
}

function startMission(id, duration) {
    console.log(Misiunea ${id} a început. Durată: ${duration} secunde.);
    // Aici vom adăuga mîine logica de timer vizual
    alert(Comandante, unitățile au plecat în misiune! Timp estimat: ${duration / 60} minute.);
}

// Pornim încărcarea la deschiderea site-ului
window.onload = loadMissions;
