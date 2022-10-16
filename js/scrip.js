/*let texto = prompt ("ingrese SI para comprar\ ingrese NO para salir")
if (texto == "Si"){
    alert ("Gracias por su respuesta.")
}
else(texto == "NO"){
    Gracias vuelva pronto.
}
let nombreProducto = 'plan emprendedor'
let precioProducto = '100'
let nombreProducto = 'plan basico'
let precioProducto = '100'

if (compra =="SI"){
    let cantidadProductoPlanEmprenderor = prompt ("ingrese que cantidad de" + planEmprendedor "desea comprar:" )
    let cantidadProductoPlanBasico = prompt ("ingrese que cantidad de" + planBasico "desea comprar:" )
    let precioTotalPlanEmprendedor = cantidadProductoPlanEmprenderor * precioProductoPlanEmprendedor
    let precioTotalPlanBasico = cantidadProductoPlanEmprenderor * precioProductoPlanEmprendedor
    let precitoTotal = precioTotalPlanEmprendedor + precioTotalPlanBasico
    alert ("el precio total es:" + precioTotal)
}
else{
   alert ("Gracias por su Visita")
}
let nombreIngresado = prompt ("Ingresar Nombre");
let apellidoIngresado = prompt ("Ingresar Apellido");
if ((nombreIngeresado !="") && (apellidoIngeresado !="")){
    alert ("Nombre:" + nombreIngresado + "\nApellido" + "apellidoIngresado");
    }else{
        alert ("Error: Ingresar Nombre y Apellido");
    
}
 let  entrada = prompt ("1-Paquetes\n2 - servicios\n3 - mensaje\n Esc - Salir");
 while (entrada != Esc){
    alert ("el usuario ingreso" + entrada);
    //volvemos a solicitar un dato. En la proxima interaccion se evalua si no es Esc.
    entrada = prompt ("1-Paquetes\n2 - servicios\n3 - mensaje\n Esc - Salir");
 }
 function bienvenidos(a,b) {
    alert("bienvenidos" + a + " " + b)
    console.log(a)
    
 }
 bienvenidos("Starjobs", "Latam")
 bienvenidos("Diana", "Gonzalez")
 bienvenidos("Adriana", "Correa")
 
 function suma(a,b){
    let resultado = a + b;
    console.log(resultado)
 }
 suma("emaill", "telefono")

 let productoA = {
    nombre: "planEmprendedor"
    precio: 100,
    stock:20
 }
 function producto(nombre,precio,stock){
    this.nombre: "plan emprendedor";
    this.precio: 100;
    this.stock: 20;
    this.restarStock -= function(cantidad){
        this.stock -= cantidad
    }

 }
 let productoB = new producto("planBasico",10,20)
 console.log(productoA)
 console.log(productoB)

 if (productoCompra.toUpperCase() == 'planEmprendedor'){
    let cantidadProductoPlanEmprenderor = prompt ("ingrese que cantidad de" + planEmprendedor "desea comprar:" )
    calculoStock(cantidadProductoPlanEmprenderor productoA.stock, ["precio"])
    productoA.restarStock(cantidadProductoPlanEmprenderor)
}
if (productoCompra == 'planBasico'){
    let cantidadProductoPlanBasico= prompt ("ingrese que cantidad de" + ProductoPlanBasico "desea comprar:" )
    calculoStock(cantidadProductoPlanBasico productoB.stock, ["precio"])
    productoB.restarStock(cantidadProductoPlanBasico)
}
let productoA = new producto("planEmprendedor",10,20)
let productoB = new producto("planBasico",10,20)
let listaProductos = [productoA, productoB]
let listaNombres = []
for (const producto of listaProductos){
    listaNombres.push(producto)
}
listaNombres = ["planEmprendedor", "PlanBasico"]

alert("estos son nuestros productos: \n  "listaNombres.join("\n -"))*/
let productoA = new producto("planEmprendedor",10,20)
let productoB = new producto("planBasico",10,20)
let productoC= new producto("planPlata",10,20)
let listaProductos = [productoA, productoB, productoC]
let listaProductosConStock = listaProductos.filter((producto)=> producto.stock > 0)
let listaNombres = listaProductosConStock.map((producto)=> producto.nombre) 
