// ==========================================
// 1. CONFIGURAȚIA OFICIALĂ INTELIGENS
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyCZWA9HfF2vpxS-o3R4jTW3Pgzot8EtQN4",
  authDomain: "world-war-3-84b0f.firebaseapp.com",
  databaseURL: "https://world-war-3-84b0f-default-rtdb.firebaseio.com/",
  projectId: "world-war-3-84b0f",
  storageBucket: "world-war-3-84b0f.firebasestorage.app",
  messagingSenderId: "697325755845",
  appId: "1:697325755845:web:482887c50c2add41e97fac"
};

// ==========================================
// 2. INIȚIALIZARE SERVER
// ==========================================
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

// ==========================================
// 3. LOGICA DE SECURITATE (ANTI-CRONUS)
// ==========================================
/**
 * Înregistrează o încălcare a regulamentului direct pe server
 */
function logSecurityViolation(idRecrut, motiv, facțiune) {
    const timestamp = new Date().toLocaleString();
    
    // Actualizăm statusul jucătorului pe server la "SUSPENDAT"
    return db.ref('jucatori_inregistrati/' + idRecrut).update({
        status_cont: "SUSPENDAT_CRONUS",
        motiv_ban: motiv,
        data_banare: timestamp,
        ultima_factiune: facțiune
    })
    .then(() => {
        console.error([SECURITATE] Jucătorul ${idRecrut} a fost BANAT pentru: ${motiv});
        localStorage.setItem('status_cont', 'SUSPENDAT');
        alert("SISTEMUL INTELIGENS A DETECTAT HARDWARE NEAUTORIZAT. CONT SUSPENDAT!");
        window.location.href = 'index.html'; // Îl dă afară din joc
    });
}

// ==========================================
// 4. LOGICA DE MEMORARE ȘI ACTUALIZARE DATE
// ==========================================
function salveazaSiLogheaza(idRecrut, parolaRecrut) {
    const emailCreat = idRecrut.toLowerCase() + "@inteligens-world.ro";

    return db.ref('jucatori_inregistrati/' + idRecrut).set({
        nume_utilizator: idRecrut,
        parola_acces: parolaRecrut,       
        email_asociat: emailCreat,        
        data_creare: new Date().toLocaleString(),
        status_cont: "ACTIV",
        nivel_acces: "AMIRAL",
        scor_integritate: 100 // Nou: Scade dacă sistemul detectează anomalii
    })
    .then(() => {
        localStorage.setItem('nume_comandant', idRecrut);
        localStorage.setItem('parola_comandant', parolaRecrut);
        localStorage.setItem('email_comandant', emailCreat);

        console.log(Datele pentru ${idRecrut} au fost sincronizate cu succes.);
        
        alert("INTELIGENS: DATE MEMORATE PE SERVER. ACCES CONFIRMAT!");
        window.location.href = 'harta.html';
    })
    .catch((error) => {
        console.error("Eroare Server Inteligens:", error);
        alert("EROARE CRITICĂ SERVER: " + error.message);
    });
}

// ==========================================
// 5. MESAJE DE CONTROL SISTEM
// ==========================================
console.log("Sistemul INTELIGENS Database & Security: OPERAȚIONAL 100%");
