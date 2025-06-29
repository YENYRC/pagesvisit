
function actualizarContador() {
let contador = localStorage.getItem('visitas');
if (contador === null) {
contador = 1; 
} else {
contador = parseInt(contador) + 1; 
}
localStorage.setItem('visitas', contador); 
const contadorElement = document.getElementById('contador');
if (contadorElement) {
contadorElement.textContent = contador; 
} else {
console.error('Elemento con id "contador" no encontrado');
}
}


function reestablecerContador() {
localStorage.setItem('visitas', 0); 
const contadorElement = document.getElementById('contador');
if (contadorElement) {
contadorElement.textContent = 0; 
}

}


window.onload = function() {
actualizarContador(); 
const reestablecerBtn = document.getElementById('reestablecer');
if (reestablecerBtn) {
reestablecerBtn.addEventListener('click', reestablecerContador); 
} else {
console.error('Elemento con id "reestablecer" no encontrado');
}
};
