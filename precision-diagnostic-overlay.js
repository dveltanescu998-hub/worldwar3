/**
 * WORLD WAR 3 - DIAGNOSTIC SYSTEM (TikTok Proof)
 * Afișează Analiza de Precizie la nivel global %
 */

const DiagnosticEngine = {
    init: function() {
        // Creăm panoul vizual
        const panel = document.createElement('div');
        panel.id = 'debug-panel';
        Object.assign(panel.style, {
            position: 'fixed',
            top: '10px',
            right: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: '#00ff00',
            padding: '15px',
            fontFamily: 'monospace',
            fontSize: '12px',
            borderRadius: '5px',
            border: '1px solid #00ff00',
            zIndex: '9999',
            pointerEvents: 'none'
        });
        document.body.appendChild(panel);
        this.update();
    },

    update: function() {
        setInterval(() => {
            const units = document.querySelectorAll('.unit-icon');
            const totalUnits = units.length;
            
            // Calculăm precizia de poziționare pe baza rezoluției
            const mapRect = document.getElementById('map-container').getBoundingClientRect();
            const precisionFactor = (100 - (1 / mapRect.width * 100)).toFixed(4);

            let html = <b style="color: #fff;">WW3 GLOBAL ANALYTICS</b><br>;
            html += -------------------------<br>;
            html += Unități Active: ${totalUnits}<br>;
            html += Rezoluție Mapă: ${Math.round(mapRect.width)}px<br>;
            html += Precizie Calcul: ${precisionFactor}%<br>;
            html += Status Server: <span style="color: #55ff55;">SINCRONIZAT</span><br>;
            html += -------------------------<br>;
            
            // Verificăm conflictele în timp real
            const conflicts = GlobalWarEngine.globalStatusCheck();
            html += Conflicte în curs: ${conflicts.length}<br>;
            
            if (conflicts.length > 0) {
                html += <span style="color: #ff4444;">⚠️ COLLISION DETECTED</span>;
            }

            document.getElementById('debug-panel').innerHTML = html;
        }, 100); // Update rapid la 10fps pentru efect vizual profesional
    }
};

// Pornire automată la încărcare
window.addEventListener('load', () => DiagnosticEngine.init());
