let productosCarritos = new Map();          //creo variable local tipo map donde se guardaran los productos que agregue. 
//map nos permite almacenar en una nuevo array el valor de otro en donde sus parametros se vean afectados o influenciados por una funcion.

try         //creo variable localstorage (cookie), si hay un error significa que ya existe, y por ende ya hay productos en mi carrito.
{
    localStorage.setItem(misProductos);
    throw new Error('oops');
}
catch (ex)  //como se que quiza ya haya productos en mi carrito, entonces igualare mi variable map con lo que tenga en mi cookie
{
    productos_carritos_existentes = new Map(JSON.parse(localStorage.misProductos));
    productosCarritos = productos_carritos_existentes;
}



function agregar_carrito(nombre_producto)        //creo una funcion que recibe por parametro el codigo del producto y su id para identificarlo y extraer su informacion
{
    producto = document.getElementsByName(nombre_producto);

    nombre = nombre_producto;                                        //cargo en variable local el valor del data prenda
    precio = producto.getAttribute('data-marca');                    //cargo en variable local el valor del data marca
    codigo = producto.getAttribute('data-codigo');

    if(productosCarritos.has(codigo))               //si el codigo de producto ya existe en mi map entonces tengo que agregarle uno mas a su cantidad
    {
        console.log("detectamos que ya existe un producto con ese codigo, sumaremos uno mas.");
        //agregar codigo que traiga la cantidad de producto y le sume uno.
    }
    else 
    {
        console.log("producto ingresado por primera vez.");
        //agregar codigo para sumar un producto en cantidad.
    }

    productosCarritos.set(codigo, nombre+ "." + precio);       //agrego todo el set de datos a mi variable local map
    localStorage.misProductos = JSON.stringify(Array.from(productosCarritos.entries()));        //cargo mi cookie con todo lo que tenga en mi variable map
}

function limpiar_lista_productos()      //para limpiar el carrito, limpio a cero tanto mi variable map como mi localstorage
{
    productosCarritos.clear();
    localStorage.clear();
}