let nombres = [`sergio`, `abrham`, `pedro`, `juan`];



function agregarAmigo(){
    let nombreIngresado = document.getElementById(`amigo`).value;
    if (nombreIngresado == ``){
        alert(`Por Favor Ingrese Un Nombre`);
    } if (nombreIngresado >= 0){
        alert(`Por Favor Ingrese Un Nombre`);
        limpiarCajaTexto();
    } else {
        nombres.push(nombreIngresado);

        limpiarCajaTexto();
        console.log(nombres)
    };
}

function limpiarCajaTexto (){
    let textoEnCaja = document.querySelector(`#amigo`).value = ``;
};
function limpiarArregloNombres(){
    let nombres = []
}






//funcion que nos ayuda a agregar un nombre a la lista que se muestra en pantalla
function agregarNombreListaPantalla(posicion){
var listaEnPantalla = document.getElementById(`listaAmigos`);
var nuevoNombre = document.createElement(`li`);
nuevoNombre.appendChild(document.createTextNode(`${nombres[posicion]}`));
listaEnPantalla.appendChild(nuevoNombre)
};

var listaAmigos = document.getElementById(`listaAmigos`)

function agregarAmigoEscrito(){
    for(let posicionEnLista =0; posicionEnLista <= nombres.length; posicionEnLista++){
    var li = document.createElement(`li`)
    li.innerHTML = nombres[posicionEnLista]
    console.log(posicionEnLista)
    listaAmigos.appendChild(li)

    };
};

    agregarAmigoEscrito();
    agregarNombreListaPantalla(3);
  
    

    console.log(nombres);
    console.log(nombres.length);




