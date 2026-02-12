// Objetos con inventario

const audifonosPioneer = {
    nombre: "Pioneer DJ HD CUE 1",
    marca: "Pioneer",
    categoria: "audifonos",
    precio: 150000,
    stock: 20
}

const controladorDjPioneer = {
    nombre: "Pioneer Controlador Dj XDJ-RR",
    marca: "Pioneer",
    categoria: "Controlador DJ",
    precio: 1500000,
    stock: 5
}

const mesaDj = {
    nombre: "Mesa de DJ en V aluminio",
    marca: "Wharfedale",
    categoria: "Mesa DJ",
    precio: 420000,
    stock: 10
}

const parlantePasivaWharfeadale = {
    nombre: "Impact-X15 15 350w",
    marca: "Wharfedale",
    categoria: "Parlante Pasivo",
    potencia: "350w",
    precio: 245000,
    stock: 25
}

const consolaAnalogaSoundraft = {
    nombre: "EPM8",
    marca: "Soundcraft",
    categoria: "Consola Analoga",
    precio: 470000,
    stock: 15
}

const cableXLR = {
    nombre: "Cable XLR 30315 D6 15m",
    marca: "Soundcraft",
    categoria: "Cable XLR",
    precio: 25000,
    stock: 50
}

let inventario = [audifonosPioneer, controladorDjPioneer, mesaDj, parlantePasivaWharfeadale, consolaAnalogaSoundraft, cableXLR]

//funcion para mostrar el inventario
function mostrarInventario() {
    if (inventario.length === 0) {
        console.log("El inventario está vacío.");
        return;
    }

    console.table(inventario);
}

// funcion para calcular el precio final con impuestos y que lo imprima en una tabla
function calcularImpuestosInventario() {

    const tablaImpuestos = inventario.map(producto => {

        const impuesto = Math.round(producto.precio * 0.19);
        const precioFinal = Math.round(producto.precio + impuesto);

        return {
            nombre: producto.nombre,
            precioBase: producto.precio,
            impuesto19: impuesto,
            precioFinal: precioFinal
        };
    });

    console.table(tablaImpuestos);
}

//funcion para agregar productos al inventario
function agregarProducto() {
    const nombre = prompt("Ingrese el nombre del producto:").trim().toLowerCase();
    const marca = prompt("Ingrese la marca:");
    const categoria = prompt("Ingrese la categoría:").toLowerCase();

    const precio = Number(prompt("Ingrese el precio:"));
    const stock = Number(prompt("Ingrese el stock:"));

    // Validaciones
    if (!nombre || !marca || !categoria) {
        console.log("Nombre, marca y categoría son obligatorios");
        return;
    }

    if (isNaN(precio) || precio <= 0) {
        console.log("Precio inválido");
        return;
    }

    if (isNaN(stock) || stock < 0) {
        console.log("Stock inválido");
        return;
    }
    //Nuevo objeto
    const nuevoProducto = {
        nombre,
        marca,
        categoria,
        precio,
        stock
    };

    inventario.push(nuevoProducto);

    alert("Producto agregado correctamente");
}

//funcion para eliminar productos
function eliminarDelInventario(nombre) {
    for(let i = 0; i < inventario.length; i++) {
        if(inventario[i].nombre === nombre) {
            inventario.splice(i,1)
            break
        }
    }
}



//funcion para modificar productos
function actualizarStock (nombreProducto, nuevoStock) {
    for(let producto of inventario) {
        if (producto.nombre === nombreProducto) {
            producto.stock = nuevoStock
        }
    }
} 


//funcion para calcular el valor total del inventario

function calcularValorTotal () {
    let total = 0;

    for (let producto of inventario) {
        total+= producto.precio * producto.stock
    }
    return total
}


// funcion para buscar productos mediante funciones personalizadas.

//por categoria
function buscarPorCategoria (categoria) {
    return inventario.filter(p => p.categoria === categoria)
}

//por nombre
function buscarPorNombre (nombre) {
    return inventario.filter(p => p.nombre === nombre)
}

//ejecutar las funciones

//agregarProducto() 
//eliminarDelInventario(nombre) 
//actualizarStock (nombre, nuevoStock) 
//calcularValorTotal ()
//buscarPorCategoria (categoria)
//buscarPorNombre (nombre)