/**
 * WORLD WAR 3 - AUDIO MANAGER (Sezonul 1)
 * Gestionează redarea sunetelor și a muzicii ambientale.
 */

const AudioManager = {
    _isMuted: false,
    _currentMusic: null,

    // Colecția de sunete (Referințe către fișierele din assets)
    SOUNDS: {
        BATTLE_START: "assets/audio/battle_start.mp3",
        LEVEL_UP: "assets/audio/promotion.mp3",
        ALERT_RED: "assets/audio/security_breach.mp3",
        CLICK_TACTIC: "assets/audio/click.mp3"
    },

    /**
     * Redă un sunet scurt (Efect sonor)
     * @param {string} soundKey - Cheia din obiectul SOUNDS
     */
    playSound: function(soundKey) {
        if (this._isMuted) return;

        const audioPath = this.SOUNDS[soundKey];
        if (audioPath) {
            const sfx = new Audio(audioPath);
            sfx.volume = 0.6;
            sfx.play().catch(e => console.log("Audio Play Blocked: Aștept interacțiune utilizator."));
        }
    },

    /**
     * Pornirea muzicii de fundal (Loop)
     * @param {string} trackPath - Calea către fișierul de muzică
     */
    startAmbientMusic: function(trackPath = "assets/audio/ambient_map.mp3") {
        if (this._currentMusic) {
            this._currentMusic.pause();
        }

        this._currentMusic = new Audio(trackPath);
        this._currentMusic.loop = true;
        this._currentMusic.volume = 0.3;
        this._currentMusic.play().catch(e => console.warn("Muzica va porni la primul click pe hartă."));
    },

    /**
     * Metodă specială pentru Alerta Anti-Cheat
     */
    triggerSecurityAlarm: function() {
        this.playSound('ALERT_RED');
        console.warn("🔊 Redare alertă sonoră: INTEGRITATE COMPROMISĂ.");
    },

    toggleMute: function() {
        this._isMuted = !this._isMuted;
        if (this._currentMusic) {
            this._currentMusic.muted = this._isMuted;
        }
        return this._isMuted;
    }
};

// Integrare cu SoundLibrary pentru automatizare
window.AudioManager = AudioManager;

// Dacă sistemul detectează un semnal tactic, putem reda automat un sunet
console.log("AudioManager INTELIGENS: Instalat (Sezonul 1).");
