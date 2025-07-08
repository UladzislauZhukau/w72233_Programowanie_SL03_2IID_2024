for(let i = 0; i <= 100; i++){
    if(i%2 === 0){
        console.log(i);
    }
}

onclick = "dodawanie";
function dodawanie(){
    const value1 = Number(prompt("Podaj pierwszą liczbę",10));
    const value2 = Number(prompt("Podaj drugą liczbę",10));
    alert("Wynik dodawania: " + (value1+value2));
}

function pokazCzas() {
    const Teraz = new Date();
    const godzina = Teraz.toLocaleTimeString(); //HH:MM:SS
    document.getElementById("penis").textContent = godzina;
}

pokazCzas();

setInterval(pokazCzas, 1000);
let dildo = 0;
function timer(){

    dildo = dildo + 1;
    document.getElementById("timeonpage").innerHTML = dildo + " seconds";
}

setInterval(timer, 1000);

let ran = 8;
let kurwa = Number(prompt("podaj liczbe", 10));
switch(kurwa){
    case ran:

}