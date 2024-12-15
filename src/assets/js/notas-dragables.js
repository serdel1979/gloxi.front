// Selecciona el contenedor del textarea
const container = document.getElementById("note-container");

// Variables para almacenar la posición
let offsetX, offsetY, isDragging = false;

// Manejador para empezar el arrastre
container.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - container.getBoundingClientRect().left;
    offsetY = e.clientY - container.getBoundingClientRect().top;
    document.body.style.userSelect = "none"; // Evita seleccionar texto mientras arrastras
});

// Manejador para mover el elemento
document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        container.style.left = `${e.clientX - offsetX}px`;
        container.style.top = `${e.clientY - offsetY}px`;
    }
});

// Manejador para detener el arrastre
document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.userSelect = ""; // Restablece la selección de texto
});
