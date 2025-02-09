let arregloNombres = [];
var listaAmigos = document.getElementById("listaAmigos");
var resultado = document.getElementById("resultado");
var nombreSorteado = "";

function agregarAmigo(){
    let nombreIngresado = document.getElementById("amigo").value;
    if (nombreIngresado == ""){
    } if (nombreIngresado >= 0){
        alert("Por Favor Ingrese Un Nombre");
        limpiarCajaTexto();
    } else {
        arregloNombres.push(nombreIngresado);
        agregarNombreEscrito();
        console.log(arregloNombres);
        limpiarCajaTexto();
    };
}

function sortearAmigo(){
    if(arregloNombres.length == 0) {
        alert("La Lista De Amigos está Vacia, Escribe Los Nombres Para Sortearlos");
    }else{
        let indiceAleatorio = Math.floor(Math.random() * arregloNombres.length);
        nombreSorteado = arregloNombres[indiceAleatorio];
        resultado.innerHTML = `El Amigo Sorteado es: ${nombreSorteado}`;
        listaAmigos.innerHTML = "";
    }
}

function recorrerArreglo(){
    for(let posicionEnLista =0; posicionEnLista < arregloNombres.length; posicionEnLista++){
    var listaPantalla = document.createElement("li");
    listaPantalla.innerHTML = arregloNombres[posicionEnLista];
    listaAmigos.appendChild(listaPantalla);
    }
}

function agregarNombreEscrito(){
        var listaPantalla = document.createElement("li");
        listaPantalla.innerHTML = arregloNombres[arregloNombres.length-1];
        listaAmigos.appendChild(listaPantalla);
}

function limpiarCajaTexto (){
    let textoEnCaja = document.querySelector("#amigo").value = "";
}


    



