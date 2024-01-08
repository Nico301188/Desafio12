
// https://www.carwow.es/coches-deportivos
// const color1 = "#1CDCE8"
// const color2 = "#171717"
// const color3 = "#00B67A"
// const color4 = "#F5F2F8"

const temaSeleccionado = document.getElementById('temaSeleccionado');
const coloresSelect = document.getElementById('coloresSelect');
const modoSuperpuestoCheckbox = document.getElementById('modoSuperpuesto');
const resetBtn = document.getElementById('resetBtn');
const circulos = document.querySelectorAll("DIV");
const colores = ['#1CDCE8', '#171717', '#00B67A', '#F5F2F8'];

const tematicaElegida = "Autos Deportivos";
const nuevoSpan = document.createElement("span");
nuevoSpan.textContent = `Temática elegida: ${tematicaElegida}`;
const contenedor = document.body;
// Agregar el nuevo span como hijo del contenedor
contenedor.appendChild(nuevoSpan);

// Manejar el cambio de color al hacer clic en un círculo
circulos.forEach((circulo, index) => {
    circulo.addEventListener('click', () => {
        const width = window.innerWidth;
        if (width >= 500) {
            const colorSeleccionado = colores[coloresSelect.value]

            if (modoSuperpuestoCheckbox.checked) {
                // Modo superpuesto
                circulos.forEach((c) => {
                    c.style.backgroundColor = colorSeleccionado;
                });
            } else {
                // Modo normal
                circulo.style.backgroundColor = colorSeleccionado;
            }
        }
    });
});


// Manejar el evento de reset
resetBtn.addEventListener('click', () => {
    const width = window.innerWidth;
    if (width >= 500) {
        circulos.forEach((circulo) => {
            circulo.style.backgroundColor = '';
        });
    }
});


function ajustarInteraccionSegunResolucion() {
    const anchoVentana = window.innerWidth;
    const coloresHabilitados = anchoVentana >= 500;

    coloresSelect.disabled = !coloresHabilitados;
    modoSuperpuestoCheckbox.disabled = !coloresHabilitados;
    resetBtn.disabled = !coloresHabilitados;

    if (!coloresHabilitados) {
        // Cambiar los colores de los círculos a gris
        circulos.forEach((circulo, index) => {
            circulo.style.backgroundColor = "rgb(150, 150, 150)";
        });
    }
    else {
        circulos.forEach((circulo, index) => {
            let colorDiv = window.getComputedStyle(circulo).backgroundColor
            if (colorDiv === "rgb(255, 255, 255)") {
            } else if (colorDiv === "rgb(150, 150, 150)") {
                circulo.style.backgroundColor = "#fff";
            }
        });
    }
}



// Ejecutar al cargar la página y al cambiar el tamaño de la ventana
ajustarInteraccionSegunResolucion();
window.addEventListener('resize', ajustarInteraccionSegunResolucion);

