/**
 * WORLD WAR 3 - CONFIGURAȚIE SEZOANE
 * Gestionează tranziția de conținut și evenimentele de sezon.
 */

const SeasonConfig = {
    current_season: 1,
    season_name: "INITIAL_ASSAULT",
    
    // Configurații specifice Sezonului 1
    SEASON_1: {
        active: true,
        max_level: 50,
        map_theme: "arctic_winter", // Tema pentru harta.html
        special_unit: "TANC_LEVIATHAN",
        
        // Arme disponibile în acest sezon
        available_assets: ["arma_rosie.png", "arma_verde.png"],
        
        // Modificatori globali
        xp_multiplier: 1.0,
        combat_difficulty: "NORMAL"
    },

    // Pregătire pentru Sezonul 2 (Inactiv momentan)
    SEASON_2: {
        active: false,
        name: "DESERT_STORM",
        max_level: 100,
        map_theme: "sand_dunes"
    },

    /**
     * Returnează setările sezonului activ
     */
    getActiveSettings: function() {
        return this["SEASON_" + this.current_season];
    },

    /**
     * Schimbă tema vizuală a jocului în funcție de sezon
     */
    applySeasonTheme: function() {
        const theme = this.getActiveSettings().map_theme;
        console.log([SISTEM] Aplicare temă sezonieră: ${theme.toUpperCase()});
        
        // Dacă avem stiluri specifice în efecte-vizuale.css, le activăm aici
        if (theme === "arctic_winter") {
            document.documentElement.style.setProperty('--map-filter', 'blue-tint');
        }
    }
};

// Export pentru restul modulelor
window.SeasonConfig = SeasonConfig;

// Auto-verificare la încărcare
console.log("SeasonConfig INTELIGENS: Sezonul " + SeasonConfig.current_season + " este ONLINE.");
