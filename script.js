const tomarPedido = (platillo) => {
    return new Promise((resolve, reject) => {
        console.log(` Tomando pedido de: ${platillo}...`);
        setTimeout(() => {
            if (!platillo) {
                reject(new Error("No se especificó ningún platillo en el pedido."));
            } else {
                resolve({ platillo, estado: "confirmado" });
            }
        }, 1000);
    });
};
