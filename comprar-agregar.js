function comprar(){
var total = 0;    
var tabla = document.querySelector(".tabla"); 
tabla.innerHTML=""; //limpiamos la tabla
compras.forEach ( function (elemento){  //recorremos el vector con los indices para encontrar los productos deceados.
var row = document.createElement("tr"); 
row.innerHTML = "<td>"+ productos[elemento].nombre +"</td>"+
    "<td>"+productos[elemento].precio+"</td>";
total = productos[elemento].precio + total; //almacenamos el precio para calcular el total 
tabla.appendChild(row);
});
var row = document.createElement("tr");
row.innerHTML = "<td class='total'> Total </td>"+ //agregamos una fila extra para el total;
    "<td class='total'>"+total+"</td>";
tabla.appendChild(row);
var titulo = document.querySelector("#titulo");
titulo.textContent = "Resumen";
hiddenBttn(); //sacamos las caracteristicas al boton para poder ocultarlo
}


function agregar(e){
var button = e.target; //tomamos el objeto evento y buscamos que boton lo disparo

let indices = button.dataset.index; //buscamos el atributo DATA que tiene el indice del vector de productos correspondiente a ese boton
compras.push(indices);
button.classList.remove("bttn-danger");
button.classList.add("bttn-success"); //modificamos el boton para que cambie de color
button.removeAttribute("onclick"); //sacamos el evento para evitar la carga de mas de un producto.
}

function hiddenBttn(){ //le sacamos las propiedades al boton y lo ocultamos.
    var boton = document.querySelector("button");
    boton.classList.remove("bttn-slant");
    boton.classList.remove("bttn-m");
    boton.classList.remove("bttn-danger");
    boton.classList.add("bttnComprar");
    
}