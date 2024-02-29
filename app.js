const ProductManager = require('./ProductManager');

const PM = new ProductManager(`${__dirname}/productos.json`);

const productos = new ProductManager("productos.json");

// Testing
(async () => {
    // 1.- Arreglo vacío
    console.log(await productos.getProducts());

    // 2.- Agrega productos
    await productos.addProduct('modulo1', 'presupuestador', '20000', 'img1', 'sp142', 5);
    await productos.addProduct('modulo2', 'ppto y planif', '45000', 'img2', 'sp143', 15);
    await productos.addProduct('modulo5', 'control', '55000', 'img5', 'sp150', 15);

    console.log(await productos.getProducts());

    // 3.- Probando getProductById - existente y Not found
    try {
        console.log(await productos.getProductById(1));
        await productos.getProductById(3);
    } catch (error) {
        console.error(error.message);
    }

    // 4.- Validando que no se repita el campo "code"
    await productos.addProduct('modulo3', 'control', '5000', 'img3', 'sp143', 20);

    // 5.- Validando que todos los campos son obligatorios. Todos los datos (values) obligatorios
    await productos.addProduct('modulo4', 'certif', '15000', '', 'sp144', 2);


    try {
        // Mostrar productos antes de las operaciones
        console.log("Productos antes de las operaciones:");
        console.log(await productos.getProducts());

        // 6.- Actualizando producto
        await productos.updateProduct(1, { price: '25000', stock: 10 });
        console.log("Producto actualizado:");
        console.log(await productos.getProductById(1));

        // 7.- Eliminando producto
        await productos.deleteProduct(3);
        console.log("Producto eliminado, lista de productos actualizada:");
        console.log(await productos.getProducts());
    } catch (error) {
        console.error(error.message);
        
    }
   
})();


