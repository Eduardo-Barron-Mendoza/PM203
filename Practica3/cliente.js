function mostrar_menu(productos){

    console.table(productos);
}


function mostrar_promociones(promociones){

    let promos = promociones.map(promocion => {
        return {

            producto: promocion.nombre,
            precio: promocion.precio

        };
    });
    console.table(promos);
}

function productos_disponibles(productos){
    let disponibles = [];
    productos.forEach(producto => {
        disponibles.push({

            producto: producto.nombre,
            categoria: producto.categoria

        });
    });
    console.table(disponibles);
}