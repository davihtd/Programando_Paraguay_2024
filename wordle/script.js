let intentos = 6;
// let palabra = "APPLE";
const input = document.getElementById("guess-input");

window.addEventListener('load', init);
const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

function init() {
    console.log('Esto se ejecuta solo cuando se carga la pagina web');
}

function leerIntento() {
    let intento = document.getElementById("guess-input").value;
    intento = intento.toUpperCase();
    return intento;
}

function intentar() {
    const INTENTO = leerIntento(); // Moved inside the function to get the updated value


    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i] === palabra[i]) { // VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if (palabra.includes(INTENTO[i])) { // AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else { // GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN);
    }

    GRID.appendChild(ROW);
    intentos--;
    if (INTENTO === palabra) {
        terminar("<h1>¡GANASTE! 😀</h1>");
        return;
    }

    if (intentos === 0) {
        terminar("<h1>¡PERDISTE! 😖</h1>");
    }
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
    