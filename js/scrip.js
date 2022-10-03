let texto = prompt ("ingrese SI para comprar\ ingrese NO para salir")
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