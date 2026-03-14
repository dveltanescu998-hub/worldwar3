// Configurația ta Firebase oficială
const firebaseConfig = {
  apiKey: "AIzaSyCZWA9HfF2vpxS-o3R4jTW3Pgzot8EtQN4",
  authDomain: "world-war-3-84b0f.firebaseapp.com",
  databaseURL: "https://world-war-3-84b0f-default-rtdb.firebaseio.com/",
  projectId: "world-war-3-84b0f",
  storageBucket: "world-war-3-84b0f.firebasestorage.app",
  messagingSenderId: "697325755845",
  appId: "1:697325755845:web:482887c50c2add41e97fac"
};

// Inițializare sistem
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();

// Exportăm variabila pentru a fi folosită de index.html și harta.html
console.log("Sistemul INTELIGENS Database a fost conectat.");
