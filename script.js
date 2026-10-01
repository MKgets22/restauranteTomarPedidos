
// Funcion generica para simular el tiempo de preparacion y entrega de cada elemento
const prepararYEntregar = (etapa, item, tiempo) => {
    return new Promise((resolve,) => {
        console.log(`[${etapa}] Preparando: "${item}"...`);
        setTimeout(() => {
            console.log(`[${etapa}] "${item}" esta listo y ha sido entregado a la mesa.`);
            resolve(item);
        }, tiempo);
    });
};

// --- FLUJO DE LA ORDEN SECUENCIAL ---

async function procesarOrdenCompleta(orden) {
    console.log("--- Iniciando el servicio de la orden completa ---");

    try {
        //  bebida
        if (orden.bebida) {
            await prepararYEntregar("Bebida", orden.bebida, 1500); 
        }

        //  pizza
        if (orden.pizza) {
            await prepararYEntregar("Plato Principal", orden.pizza, 3000); 
        }

        // postre
        if (orden.postre) {
            await prepararYEntregar("Postre", orden.postre, 2000); 
        }

        // Al completar la entrega del ultimo platillo (el postre)
        console.log("Orden completa entregada con exito.");
        console.log("--- Fin del servicio de esta mesa ---");

    } catch (error) {
        console.error(`Ocurrio un error en la entrega: ${error.message}`);
    }
}

// --- EJECUTAR LA SIMULACION ---
const miOrden = {
    bebida: "Limonada Natural",
    pizza: "Pizza Pepperoni con Extra Queso",
    postre: "Tiramisu"
};

procesarOrdenCompleta(miOrden);