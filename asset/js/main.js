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
setTimeout(TenSeconds, 3000);

function TenSeconds() {
    firstFiveNumEL.innerText = "";
    alert("Tempo scaduto!");
    formEl.classList.remove("d-none");
}

// CHIEDERE ALL'UTENTE DI INSERIRE 5 NUMERI (tramite prompt o sumbit)
let userNumber = []
const formEl = document.querySelector(".form");
const inputs = formEl.querySelectorAll("input");

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    inputs.forEach(input => {
        userNumber.push(input.value);
    });



    for (let i = 0; i < cpuNumber.length; i++) {
        for (let u = 0; u < userNumber.length; u++){
            if (cpuNumber[i] == userNumber[i]) {
                console.log("identico");
                
            } else {
                console.log("diverso");
                
            }
        }
    }



    console.log(userNumber);
});







