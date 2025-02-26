// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []

//verifica si el nombre esta vacio  y agrega nombres a mi arreglo
function agregarAmigo(){
    //variable la cual recibe el nombre del amigo y llama el id del input
    let nombreAmigo = document.getElementById('amigo').value;
    //verifica si esta vacio y muestra un alert
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre."); // Evitar agregar nombres vacíos
        return;
    }
    //va agregando al arreglo los nombres
    listaAmigos.push(nombreAmigo);
    //llama una funcion para actualizar lista
    actualizarLista();
    //llama una funcion para limpiar caja
    limpiarCaja();
};

//funcion para actualizar la lista
function actualizarLista() {
    //variable que llama al elemento html
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpiar la lista antes de actualizar

    //recorremos la lista de amigos y agregamos caa uno a al elemento ul
    listaAmigos.forEach(amigo => {
        //Creamos un li y le agregamos el nombre del amigo
        let li = document.createElement("li");
        //se le asigna un el nombre del amigo al li
        li.textContent = amigo;
        //muestra en pantalla la lista y agrega el li dentroo del ul
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("No hay amigos para generar un amigo secreto");
        return;
    }else{

        let amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        mostrarResultado(amigoSecreto);

    }
}

function mostrarResultado(amigomostrar){
    let ul = document.getElementById("resultado");
    ul.innerHTML = ""; // Limpiar la lista antes de mostrar el nuevo resultado

    let li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigomostrar}`;
    ul.appendChild(li);
}
//limpia el cuadro cada vez que vas a agregar un nuevo nombre con el botono añadir
function limpiarCaja(){
    document.querySelector('#amigo').value='';
}