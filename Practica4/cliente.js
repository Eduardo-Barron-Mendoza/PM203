function mostrar_menu(productos){

    console.table(productos);
}


function mostrar_promociones(promos){

    let promociones = promos.map(promocion => {
        return {

            producto: promocion.nombre,
            precio: promocion.precio

        };
    });
    console.table(promociones);
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



function esperar(tiempo){

    return new Promise(resolve => {

        setTimeout(resolve, tiempo);

    });

}


async function mostrar_estado_pedido(pedido){

    for(const estado of pedido.pedidoEstatus){

        console.log(`
            Pedido #${pedido.id}
            Producto: ${pedido.producto}
            Estado: ${estado}
        `);

        await esperar(2000);

    }

}