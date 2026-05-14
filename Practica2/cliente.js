
function mostrar_prod(productos){

    console.log("Menú")
    for(let i = 0; i < productos.length; i++){


        console.log(`
            nombre: ${productos[i].nombre}
            precio: ${productos[i].precio}
            --------------------
            
            `);

    }
    
}

mostrar_prod(productos);