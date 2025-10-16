// GENERARE IN PAGINA 5 NUMERI CASUALI - Utilizzare mathRandom e creare una variabile in main e stamparla in index
// INSERIRE IN UNA ARRAY I CINQUE NUMERI CASUALI
let cpuNumber = []

for (let i = 0; i < 5; i++) {
    let numRandom = Math.floor(Math.random() * 100);
    cpuNumber.push(numRandom);
}

console.log(cpuNumber);

const firstFiveNumEL = document.getElementById("firstFiveNum");
firstFiveNumEL.innerText = cpuNumber;

// IMPOSTARE UN TIMER DI 30 SECONDI AFFINCHE POI SPARISCANO 
setTimeout(TenSeconds, 5000);

function TenSeconds() {
    firstFiveNumEL.innerText = "";
    alert("Tempo scaduto!");
}

// CHIEDERE ALL'UTENTE DI INSERIRE 5 NUMERI (tramite prompt o sumbit)
let userNumber = []
const formEl = document.querySelector(".form-label");

formEl.addEventListener('submit', (event) => {

    userNumber.push(formEl.value);
    console.log(userNumber);
    event.preventDefault();
});



// INSERIRE IN UNA ARRAY I CINQUE NUMERI SCELTI DALL'USER
// PARAGONARE LE DUE ARRAY