// DOM
const contenedorEstado = document.getElementById("estado-servicio");
const btnProcesar = document.getElementById("btn-procesar");

// Funcion generica para simular el tiempo de preparacion y entrega de cada elemento
const prepararYEntregar = (etapa, item, tiempo) => {
    return new Promise((resolve) => {
        contenedorEstado.innerHTML = `<strong>[${etapa}]</strong> Preparando: "${item}"...`;
        
        setTimeout(() => {
            contenedorEstado.innerHTML = `<strong>[${etapa}]</strong> "${item}" está listo y ha sido entregado a la mesa.`;
            resolve(item);
        }, tiempo);
    });
};

  //FLUJO 

async function procesarOrdenCompleta(orden) {
    btnProcesar.disabled= true; // Desactivar botón durante el proceso
    contenedorEstado.innerHTML = "Iniciando el servicio de la orden completa ";

    try {
        // Pausa breve para mostrar el inicio del servicio
        await new Promise(r => setTimeout(r, 1500));

        // bebida
        if (orden.bebida) {
            await prepararYEntregar("Bebida", orden.bebida, 2000); 
            await new Promise(r => setTimeout(r, 1500)); 
        }

        // pizza
        if (orden.pizza) {
            await prepararYEntregar("Plato Principal", orden.pizza, 3000); 
            await new Promise(r => setTimeout(r, 1500)); 
        }

        // postre
        if (orden.postre) {
            await prepararYEntregar("Postre", orden.postre, 2000); 
            await new Promise(r => setTimeout(r, 1500)); 
        }

        contenedorEstado.innerHTML = `
            Orden completa entregada con éxito. <br>
            <span style="color: #5c1d24; font-weight: bold; margin-top: 5px; display: block;">--- Fin del servicio de esta mesa ---</span>
        `;

    } catch (error) {
        contenedorEstado.innerHTML = `Ocurrió un error en la entrega: ${error.message}`;
    } finally {
        btnProcesar.disabled = false; // Reactivar botón al terminar
    }
}

// SIMULACION 
const miOrden = {
    bebida: "papelon con limon",
    pizza: "Pizza Pepperoni con Extra Queso",
    postre: "Marquesa de chocolate"
};

btnProcesar.addEventListener("click", () => {
    procesarOrdenCompleta(miOrden);
});